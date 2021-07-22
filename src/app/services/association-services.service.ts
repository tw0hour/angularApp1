import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Association } from "../models/associations.model";
import { Observable } from "rxjs";
import {CookieService} from "ngx-cookie-service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class AssociationServices {

  apiUrl: string = "http://localhost:3000/association/";

  constructor(private http: HttpClient, private cookieService: CookieService){
  }

  getAllAssociation():Observable<Association[]>{
    return this.http.get<Association[]>(this.apiUrl);
  }

  getAssociationById(idAssoc: number): Observable<Association>{
    if(!idAssoc){
      console.log("Id manquant");
    }
    return  this.http.get<Association>(this.apiUrl + idAssoc, httpOptions);
  }

  getAssociationByName(assocName: string): Observable<Association>{
    if(!assocName){
      console.log("Nom manquant");
    }
    return this.http.get<Association>(this.apiUrl + "name/" + assocName, httpOptions);
  }

  inscription(assoc: Association): Observable<Association>{
    if (!assoc.name || !assoc.mail || !assoc.password){
      alert("Tous les champs doivent être remplis !");
    }
    return this.http.post<Association>(this.apiUrl, assoc, httpOptions);
  }

  connection(name: string | undefined, password: string | undefined): boolean | null{
    if(name === undefined || password === undefined){
      alert("Tous les champs doivent être remplis !");
      return null;
    }
    if(this.http.post(this.apiUrl + "/connection", httpOptions)){
      setInterval(()=>{window.location.reload();},500);//window.location.reload();
      return true;
    }
    else{
      alert("Informations de connexion erronnées");
      return false;
    }
  }

  updateAssociation(association : Association){
    const idAssoCookie = parseInt(this.cookieService.get('associationId'));

    if(!idAssoCookie){
      console.log("updateAssoction() Id manquant");
    }

    return this.http.put<Association>(this.apiUrl + idAssoCookie,association, httpOptions).subscribe(data =>{
      console.log(data);
    });
  }

  updateAssociationPassword(idAssoc: number, password: string){
    if(!idAssoc){
      console.log("update password Id manquant");
    }
    return this.http.put(this.apiUrl + "password/" + idAssoc, password, httpOptions).subscribe();
  }
}
