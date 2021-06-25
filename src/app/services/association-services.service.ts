import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Association } from "../models/associations.model";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class AssociationServices {

  apiUrl: string = "http://localhost:3000/association/";

  constructor(private http: HttpClient){
  }

  listAssociation():Observable<Association[]>{
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
    return  this.http.get<Association>(this.apiUrl + "name/" + assocName, httpOptions);
  }

  inscription(assoc: Association): Observable<Association>{
    if (!assoc.name || !assoc.mail || !assoc.password){
      alert("Tous les champs doivent être remplis !");
    }
    return this.http.post<Association>(this.apiUrl, assoc, httpOptions);
  }

  connection(name: string | undefined, password: string | undefined): boolean | null{
    //KO : la fonction ne passe dans le 2ème if
    if(name === undefined || password === undefined){
      alert("Tous les champs doivent être remplis !");
      return null;
    }
    if(this.http.post(this.apiUrl + "/connection", httpOptions)){
      alert("Bonjour " + name + " !");
      return true;
    }
    else{
      alert("Informations de connexion erronnées");
      return false;
    }
  }
}
