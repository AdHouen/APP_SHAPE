import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensuration } from 'src/app/models/mensuration/mensuration';
import { AppSettings } from 'src/app/setting/app-setting';

@Injectable({
  providedIn: 'root'
})
export class MensurationService {


  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllMensurations(){
    return this.http.get(AppSettings.APP_URL+"/mensurations")
  }

  findMensurationById(mensuration_id:number) {
    return this.http.get(AppSettings.APP_URL+"/mensurations/"+mensuration_id)
  }

  saveMensuration(mensuration:Mensuration){
    return this.http.post(AppSettings.APP_URL+"/mensurations", JSON.stringify(mensuration),this.httpOptions);

  }


  editMensuration(mensuration_id:number) {
    return this.http.get(AppSettings.APP_URL+"/mensurations/"+mensuration_id)

  }

  updateMensuration(mensuration:Mensuration){
    return this.http.put(AppSettings.APP_URL+"/mensurations/"+mensuration.mensuration_id, JSON.stringify(mensuration),this.httpOptions);
  }

  deleteMensuration(mensuration_id : number){
    return this.http.delete(AppSettings.APP_URL+"/mensurations/"+mensuration_id)

  }


}


