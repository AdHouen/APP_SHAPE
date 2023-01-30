import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercice } from 'src/app/models/exercice/exercice';
import { AppSettings } from 'src/app/setting/app-setting';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {


  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllExercices(){
    return this.http.get(AppSettings.APP_URL+"/exercices")
  }

  findExerciceById(exercice_id:number) {
    return this.http.get(AppSettings.APP_URL+"/exercices/"+exercice_id)
  }

  saveExercice(exercice:Exercice){
    return this.http.post(AppSettings.APP_URL+"/exercices", JSON.stringify(exercice),this.httpOptions);

  }


  editExercice(exercice_id:number) {
    return this.http.get(AppSettings.APP_URL+"/exercices/"+exercice_id)

  }

  updateExercice(exercice:Exercice){
    return this.http.put(AppSettings.APP_URL+"/exercices/" + exercice.exercice_id, JSON.stringify(exercice),this.httpOptions);
  }

  deleteExercice(exercice_id : number){
    return this.http.delete(AppSettings.APP_URL+"/exercices/"+exercice_id)

  }


}


