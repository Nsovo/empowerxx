import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; //check if this needs to point to .prod on deployment

import { BehaviorSubject, Observable, from, throwError} from 'rxjs';
import {map, catchError } from 'rxjs/operators'
import { Position, PositionResult, PreferredPosition, PreferredPositionResult} from '../shared/classes/position';

export const APP_CONFIG  = {
  apiEndpoint: environment.apiEndpoint
};
@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Position[]>(`${APP_CONFIG.apiEndpoint}/Position/GetAll`);
}

getById(id: number) {
    return this.http.get<PositionResult>(`${APP_CONFIG.apiEndpoint}/Position/Get/` + id)
    .pipe(
        map(res => {
            debugger;
            if(!res.IsSuccess){
                //do something, alert
            }
            return res.Data;
        }),
        catchError(err => {
          debugger;
          console.log(err.message)
          return throwError(err.error.error_description);
          //return Observable.throw(err.statusText);
        })
        );
}

create(position: Position) {
    return this.http.post(`${APP_CONFIG.apiEndpoint}/Position/Create`, position);
}

update(position: Position) {
    return this.http.post(`${APP_CONFIG.apiEndpoint}/Position/Update`, position);
}

delete(id: number) {
    return this.http.delete(`${APP_CONFIG.apiEndpoint}/Position/Delete/${id}`);
}

//preferred positions not matched
getByCandidateId(id:number){
  return this.http.get<PreferredPosition[]>(`${APP_CONFIG.apiEndpoint}/Position/GetFromCandidateId/` + id)
    .pipe(
        map(res => {
            return res;
        }),
        catchError(err => {
          debugger;
          console.log(err.message)
          return throwError(err.error.error_description);
          //return Observable.throw(err.statusText);
        })
        );
}

addCandidatePosition(position: PreferredPosition) {
  return this.http.post<PreferredPositionResult>(`${APP_CONFIG.apiEndpoint}/Position/AddForCandidate/`, position)
  .pipe(
    map(res=>{
      debugger;
        if(res.IsSuccess){
          return res.Data;
      }
      else{
        return throwError(res.Message);
      }
    }),
    catchError(err => {
      debugger;
      console.log(err.message)
      return throwError(err.error.error_description);
      //return Observable.throw(err.statusText);
    })
  ) ;
}

deleteForCandidate(id: number) {
  return this.http.delete(`${APP_CONFIG.apiEndpoint}/Position/DeletePreferred/${id}`);
}

}
