import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; //check if this needs to point to .prod on deployment

import { BehaviorSubject, Observable, from, throwError} from 'rxjs';
import {map, catchError } from 'rxjs/operators'
import { Area, AreaResult} from '../shared/classes/areas';

export const APP_CONFIG  = {
  apiEndpoint: environment.apiEndpoint
};
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) { }
  getAreas(type: string) {
    return this.http.get<Area[]>(`${APP_CONFIG.apiEndpoint}/Area/GetAreas?areaType=`+ type);
}

getAreaById(id: number) {
    return this.http.get<AreaResult>(`${APP_CONFIG.apiEndpoint}/Area/Get/` + id)
    .pipe(
        map(res => {
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

createCandidate(user: Area) {
    return this.http.post(`${APP_CONFIG.apiEndpoint}/area/create`, user);
}

updateCandidate(user: Area) {
    return this.http.post(`${APP_CONFIG.apiEndpoint}/area/update`, user);
}

delete(id: number) {
    return this.http.delete(`${APP_CONFIG.apiEndpoint}/area/` + id);
}

}
