import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'; //check if this needs to point to .prod on deployment

import { BehaviorSubject, Observable, from, throwError} from 'rxjs';
import {map, catchError } from 'rxjs/operators'
import { Qualification, QualificationResult, Language, LanguageResult, Skill, SkillResult} from '../shared/classes/work-experience';


export const APP_CONFIG  = {
  apiEndpoint: environment.apiEndpoint
};

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor(private http: HttpClient) { }

getAll() {
  return this.http.get<Qualification[]>(`${APP_CONFIG.apiEndpoint}/Qualification/GetAll`);
}

getByCandidateId(id: number) {
  return this.http.get<Qualification[]>(`${APP_CONFIG.apiEndpoint}/Qualification/GetFromCandidateId/` + id)
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

create(qualification: Qualification) {
  return this.http.post(`${APP_CONFIG.apiEndpoint}/Qualification/Create`, qualification);
}

update(qualification: Qualification) {
  return this.http.post<QualificationResult>(`${APP_CONFIG.apiEndpoint}/Qualification/Update`, qualification)
    .pipe(
      map(res=>{
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
    )
}

delete(id: number) {
  return this.http.delete(`${APP_CONFIG.apiEndpoint}/Qualification/${id}`);
}

getCandidateLanguages(id: number) {
  return this.http.get<Language[]>(`${APP_CONFIG.apiEndpoint}/Language/GetFromCandidateId/` + id)
    .pipe(
        map(res => {
            return res;
        }),
        catchError(err => {
          debugger;
          console.log(err.message)
          return throwError(err.error.error_description);
        })
        );
}

addLanguage(lang: Language) {
  return this.http.post<LanguageResult>(`${APP_CONFIG.apiEndpoint}/Language/Update`, lang)
    .pipe(
      map(res=>{
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
    )
}
removeLanguage(id: number) {
  return this.http.delete(`${APP_CONFIG.apiEndpoint}/Language/${id}`);
}

getCandidateSkills(id: number) {
  return this.http.get<Skill[]>(`${APP_CONFIG.apiEndpoint}/Skill/GetFromCandidateId/` + id)
    .pipe(
        map(res => {
            return res;
        }),
        catchError(err => {
          debugger;
          console.log(err.message)
          return throwError(err.error.error_description);
        })
        );
}
addSkill(skill: Skill) {
  return this.http.post<SkillResult>(`${APP_CONFIG.apiEndpoint}/Skill/Update`, skill)
    .pipe(
      map(res=>{
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
    )
}
removeSkill(id: number) {
  return this.http.delete(`${APP_CONFIG.apiEndpoint}/Skill/${id}`);
}
}
