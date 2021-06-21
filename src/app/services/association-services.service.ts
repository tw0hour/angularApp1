import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Association } from "../model/associations.model";
import { Observable } from "rxjs";

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AssociationServices {

  // associations: Association[];// pour add et update

  constructor(private http: HttpClient){

  }

  listAssociation():Observable<Association[]>{
    return this.http.get<Association[]>('localhost:3000/association/');
  }

}
