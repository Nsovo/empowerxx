import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { BehaviorSubject, Observable, from, throwError, Subject} from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { UserToken, Person, LoginUser, RegisterUser } from 'src/app/shared/classes/users';
import { NgxSpinnerService } from 'ngx-spinner';

export const APP_CONFIG  = {
  apiEndpoint: environment.apiEndpoint,
  url: environment.url
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  public getLoggedInState = new Subject();

  private currentTokenSubject: BehaviorSubject<UserToken>;
  public currentToken: Observable<UserToken>;
  private currentUserSubject: BehaviorSubject<Person>;
  public currentUser: Observable<Person>;

  constructor(  handler: HttpBackend, public spinner: NgxSpinnerService, private http: HttpClient) {
    // this.http = new HttpClient(handler);

    this.currentTokenSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('currentUserToken')));
    this.currentToken = this.currentTokenSubject.asObservable();

  }

  public get currentUserValue(): Person {
    return this.currentUserSubject.value;
  }

  public login(user: LoginUser): Observable<any>  {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    const body = `username=${user.username}&password=${user.password}&grant_type=password`;
    this.spinner.show(undefined, { fullScreen: true });
    return this.http.post<any>(`${APP_CONFIG.url}/token`, body)
    .pipe(
        map(token => {
            localStorage.setItem('currentUserToken', JSON.stringify(token));
            localStorage.setItem('username', token.userName);
            localStorage.setItem('token', token.access_token);
            this.currentTokenSubject.next(token);
            const loginState = {isLoggedIn: this.isAuthenticated(), isWizardComplete: false};
            localStorage.setItem('loginState', JSON.stringify(loginState));
            return token;
        }),
        catchError(err => {
          return throwError(err.error.error_description);
        }),
        finalize(() =>  {
          this.spinner.hide();
        }));
  }

public logout(): void{
    localStorage.removeItem('currentUserToken');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.currentTokenSubject.next(null);
    this.getLoggedInState.next({isLoggedIn: false, isWizardComplete: false});

  }

  public register(user: RegisterUser): Observable<any> {
    return this.http.post(`${APP_CONFIG.apiEndpoint}/account/register`, user)
    .pipe(
      map(data => {
        return data;
      }),
      catchError(err => {
        if (err.error){
          console.log('error', err.error.ModelState);
          return throwError(err.error);
        }
        return throwError(err.message);
      })
    );
  }

  public confirmEmail(emailToken: string): Observable<any>{
    return this.http.get(`${APP_CONFIG.apiEndpoint}/Account/ConfirmEmail/` + emailToken)
    .pipe(
      map(data => {
        return data;
      }),
      catchError(err => {
        if (err.error){
          return throwError(err.error.Message);
        }
        return throwError(err.message);
      })
    );
  }

  public getToken(): any {
    return localStorage.getItem('token');
  }

  public getUserName(): any {
    return localStorage.getItem('username');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token != null;
  }
}
