import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError} from 'rxjs';
import {map, catchError } from 'rxjs/operators';
import { Candidate, CandidateResult, Person } from 'src/app/shared/classes/users';

export const APP_CONFIG  = {
  apiEndpoint: environment.apiEndpoint
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  public getAllCandidates(): Observable<any> {
    return this.http.get<Candidate[]>(`${APP_CONFIG.apiEndpoint}/Candidate/GetAll`);
}

public getCandidateById(id: number): Observable<any> {
    return this.http.get<CandidateResult>(`${APP_CONFIG.apiEndpoint}/candidate/get/` + id)
    .pipe(
        map(res => {
            if (!res.IsSuccess){
                throw new Error(res.Message);
            }
            return res.Data;
        }),
        catchError(err => {
          if (err.error === undefined){
            return throwError(err.message);
          }
          return throwError(err.error.error_description);
        })
        );
}

public createCandidate(user: Candidate): Observable<any>  {
    return this.http.post(`${APP_CONFIG.apiEndpoint}/Candidate/create`, user);
}

public updateCandidate(user: Candidate): Observable<any>  {
    return this.http.post<CandidateResult>(`${APP_CONFIG.apiEndpoint}/Candidate/Update`, user)
    .pipe(
      map(res => {
          if (!res.IsSuccess) {
              // do something, alert
              return throwError(res.Message);
          }
          return res.Data;
      }),
      catchError(err => {
        console.log(err.message);
        return throwError(err.error.error_description);
      })
      );
}

public completeWizard(user: Candidate): Observable<any>  {
  return this.http.post<CandidateResult>(`${APP_CONFIG.apiEndpoint}/Candidate/CompleteWizard`, user)
  .pipe(
    map(res => {
        if (!res.IsSuccess){
            return throwError(res.Message);
        }
        return res.Data;
    }),
    catchError(err => {
      return throwError(err.error.error_description);
    })
    );
}

public delete(id: number): Observable<any>   {
    return this.http.delete(`${APP_CONFIG.apiEndpoint}/Candidate/` + id);
}

public getUser(username: string): Observable<any> {
    return this.http.get<Person>(`${APP_CONFIG.apiEndpoint}/Account/GetUser?username=` + username);
}
}
