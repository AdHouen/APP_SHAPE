import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrainement } from 'src/app/models/entrainement/entrainement';
import { AppSettings } from 'src/app/setting/app-setting';

@Injectable({
  providedIn: 'root'
})
export class EntrainementService {


  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllEntrainements(){
    return this.http.get(AppSettings.APP_URL+"/entrainements")
  }

  findEntrainementById(entrainement_id:number) {
    return this.http.get(AppSettings.APP_URL+"/entrainements/"+entrainement_id)
  }

  saveEntrainement(entrainement:Entrainement){
    return this.http.post(AppSettings.APP_URL+"/entrainements", JSON.stringify(entrainement),this.httpOptions);

  }


  editEntrainement(entrainement_id:number) {
    return this.http.get(AppSettings.APP_URL+"/entrainements/"+entrainement_id)

  }

  updateEntrainement(entrainement:Entrainement){
    return this.http.put(AppSettings.APP_URL+"/entrainements/" + entrainement.entrainement_id, JSON.stringify(entrainement),this.httpOptions);
  }

  deleteEntrainement(entrainement_id : number){
    return this.http.delete(AppSettings.APP_URL+"/entrainements/"+entrainement_id)

  }


}


