import { Injectable, Output, EventEmitter } from '@angular/core'; 
import { BehaviorSubject, Observable, from, throwError, Subject} from 'rxjs';

@Injectable()

export class CurrentUserService {
  public getLoggedInState = new Subject<any>()

  set currentUser(state) {
    this.getLoggedInState.next(state);
    localStorage.setItem('loginState', JSON.stringify(state));
  }
  
  get currentUser() {
    let state = localStorage.getItem('loginState');
    return JSON.parse(state)
  }
  

  
}
