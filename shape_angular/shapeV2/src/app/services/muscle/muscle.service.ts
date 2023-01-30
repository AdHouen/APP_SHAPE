import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Muscle } from 'src/app/models/muscle/muscle';
import { AppSettings } from 'src/app/setting/app-setting';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {


  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllMuscles(){
    return this.http.get(AppSettings.APP_URL+"/muscles")
  }

  findMuscleById(muscle_id:number) {
    return this.http.get(AppSettings.APP_URL+"/muscles/"+muscle_id)
  }

  saveMuscle(muscle:Muscle){
    return this.http.post(AppSettings.APP_URL+"/muscles", JSON.stringify(muscle),this.httpOptions);

  }


  editMuscle(muscle_id:number) {
    return this.http.get(AppSettings.APP_URL+"/muscles/"+muscle_id)

  }

  updateMuscle(muscle:Muscle){
    return this.http.put(AppSettings.APP_URL+"/muscles/"+ muscle.muscle_id, JSON.stringify(muscle),this.httpOptions);
  }

  deleteMuscle(muscle_id : number){
    return this.http.delete(AppSettings.APP_URL+"/muscles/"+muscle_id)

  }


}


