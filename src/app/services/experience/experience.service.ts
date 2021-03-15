import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; //check if this needs to point to .prod on deployment

import { BehaviorSubject, Observable, from, throwError} from 'rxjs';
import {map, catchError } from 'rxjs/operators'
import { Experience, ExperienceResult} from '../shared/classes/work-experience';

export const APP_CONFIG  = {
  apiEndpoint: environment.apiEndpoint
};
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Experience[]>(`${APP_CONFIG.apiEndpoint}/Experience/GetAll`);
  }

  getByCandidateId(id: number) {
    return this.http.get<Experience[]>(`${APP_CONFIG.apiEndpoint}/Experience/GetFromCandidateId/` + id)
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

  create(exp: Experience) {
    return this.http.post(`${APP_CONFIG.apiEndpoint}/Experience/Create`, exp);
  }

  update(exp: Experience) {
    return this.http.post<ExperienceResult>(`${APP_CONFIG.apiEndpoint}/Experience/Update`, exp)
      .pipe(
        map(res=>{
          debugger;
            if(res.IsSuccess){
              return res.Data;
          }
          else{
            //return throwError(res.Message);
            throw throwError(res.Message)
          }
        }),
        catchError(err => {
          debugger;
          console.log(err.message)
          return throwError(err.error.error_description);
          //return Observable.throw(err.statusText);
        })
      )
  }

  delete(id: number) {
    return this.http.delete(`${APP_CONFIG.apiEndpoint}/Experience/${id}`);
  }
}
