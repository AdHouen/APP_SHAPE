import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { AppSettings } from 'src/app/setting/app-setting';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllUtilisateurs(){
    return this.http.get(AppSettings.APP_URL+"/utilisateurs")
  }

  findUtilisateurById(utilisateur_id:number) {
    return this.http.get(AppSettings.APP_URL+"/utilisateurs/"+utilisateur_id)
  }

  saveUtilisateur(utilisateur:Utilisateur){
    return this.http.post(AppSettings.APP_URL+"/utilisateurs", JSON.stringify(utilisateur),this.httpOptions);

  }


  editUtilisateur(utilisateur_id:number) {
    return this.http.get(AppSettings.APP_URL+"/utilisateurs/"+utilisateur_id)

  }

  updateUtilisateur(utilisateur:Utilisateur){
    return this.http.put(AppSettings.APP_URL+"/utilisateurs/"+ utilisateur.utilisateur_id, JSON.stringify(utilisateur),this.httpOptions);
  }

  deleteUtilisateur(utilisateur_id : number){
    return this.http.delete(AppSettings.APP_URL+"/utilisateurs/"+utilisateur_id)

  }


}


