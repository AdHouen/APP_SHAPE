import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abonnement } from 'src/app/models/abonnement/abonnement';
import { AppSettings } from 'src/app/setting/app-setting';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {


  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllAbonnements(){
    return this.http.get(AppSettings.APP_URL+"/abonnements")
  }

  findAbonnementById(abonnement_id:number) {
    return this.http.get(AppSettings.APP_URL+"/abonnements/"+abonnement_id)
  }

  saveAbonnement(abonnement:Abonnement){
    return this.http.post(AppSettings.APP_URL+"/abonnements", JSON.stringify(abonnement),this.httpOptions);

  }


  editAbonnement(abonnement_id:number) {
    return this.http.get(AppSettings.APP_URL+"/abonnements/"+abonnement_id)

  }

  updateAbonnement(abonnement:Abonnement){
    return this.http.put(AppSettings.APP_URL+"/abonnements/" + abonnement.abonnement_id, JSON.stringify(abonnement),this.httpOptions);
  }

  deleteAbonnement(abonnement_id : number){
    return this.http.delete(AppSettings.APP_URL+"/abonnements/"+abonnement_id)

  }


}


