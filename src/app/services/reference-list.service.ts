import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; //check if this needs to point to .prod on deployment

import { BehaviorSubject, Observable, from, throwError} from 'rxjs';
import {map, catchError,tap } from 'rxjs/operators'
import { ReferenceList, ReferenceListItem, ListModel, ListItemModel, ListResult} from '../shared/classes/reference-lists';
import { University } from 'app/shared/classes/data';

export const APP_CONFIG  = {
  apiEndpoint: environment.apiEndpoint
};
@Injectable({
  providedIn: 'root'
})
export class ReferenceListService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<ReferenceList[]>(`${APP_CONFIG.apiEndpoint}/ReferenceList/GetAll`);
}
  getAllItems(refListId: number) {
  return this.http.get<ReferenceListItem[]>(`${APP_CONFIG.apiEndpoint}/ReferenceList/GetAllItems/`+refListId);
}

create(user: ReferenceList) {
    return this.http.post(`${APP_CONFIG.apiEndpoint}/area/create`, user);
}

getList(name: string, namespace: string) {
    return this.http.get<ListResult>(`${APP_CONFIG.apiEndpoint}/ReferenceList/GetList?name=${name}&namespace=${namespace}`)
    .pipe(
        map(res => {
            if(!res.IsSuccess){
                //do something, alert
                return throwError(res.Message);
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

getSelectedList(name: string, namespace: string, selectedValue: number, isMulti: boolean = false) {
  return this.http.get<ListResult>(`${APP_CONFIG.apiEndpoint}/ReferenceList/GetList?name=${name}&namespace=${namespace}&value=${selectedValue}&isMulti=${isMulti}`)
  .pipe(
      map(res => {
          if(!res.IsSuccess){
              //do something, alert
              return throwError(res.Message);
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

getItemName(list:ListItemModel[], value:number) : string {
  let item = list.find(x=>x.Value == value);
  if(item != undefined){
    return item.DisplayName;
  }
  return '';
}

updateMultivalueList(list:ListItemModel[], value:number, isSelected: boolean){
  let selected = list.find(x=>x.Value == value);
  if(selected != undefined){
    let index = list.indexOf(selected);
    list[index].Selected = isSelected;
  }
} 

//Get other lists
getUniversitiesWithFilter(filter:string = '') : Observable<University[]>{
  return this.http.get<University[]>('/assets/data/universities.json')
  .pipe(
    tap((res: University[]) => {
      let unis: University[] = res
      .map(u => new University(u.Name, u.ShortName))
      .filter(u=>u.Name.toLowerCase().includes(filter.toLowerCase())
      ||u.Name.toLowerCase().includes(filter.toLowerCase()));
      debugger;
      return unis;
    })
  );
}

getUniversities() {
  return this.http.get<University[]>(`${APP_CONFIG.apiEndpoint}/Universities/GetList`)
  .pipe(
    map(u =>{ return u})
  );
}

}
