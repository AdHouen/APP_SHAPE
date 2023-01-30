import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gallerie } from 'src/app/models/gallerie/gallerie';
import { AppSettings } from 'src/app/setting/app-setting';

@Injectable({
  providedIn: 'root'
})
export class GallerieService {


  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllGalleries(){
    return this.http.get(AppSettings.APP_URL+"/galleries")
  }

  findGallerieById(gallerie_id:number) {
    return this.http.get(AppSettings.APP_URL+"/galleries/"+gallerie_id)
  }

  saveGallerie(gallerie:Gallerie){
    return this.http.post(AppSettings.APP_URL+"/galleries", JSON.stringify(gallerie),this.httpOptions);

  }


  editGallerie(gallerie_id:number) {
    return this.http.get(AppSettings.APP_URL+"/galleries/"+gallerie_id)

  }

  updateGallerie(gallerie:Gallerie){
    return this.http.put(AppSettings.APP_URL+"/galleries/"+ gallerie.gallerie_id, JSON.stringify(gallerie),this.httpOptions);
  }

  deleteGallerie(gallerie_id : number){
    return this.http.delete(AppSettings.APP_URL+"/galleries/"+gallerie_id)

  }


}


