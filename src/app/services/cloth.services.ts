import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Cloth} from "../models/cloth.model";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class ClothServices {

  apiUrl: string = "http://localhost:3000/cloth/";

  constructor(private http: HttpClient){
  }


  addCloth(cloth: Cloth): Observable<Cloth>{
    if(!cloth.name || !cloth.size || !cloth.gender){
      alert("Tous les champs doivent être remplis !");
    }
    return this.http.post<Cloth>(this.apiUrl, cloth, httpOptions);
  }

  getClothById(idCloth: number): Observable<Cloth>{
    if(!idCloth){
      console.log("Id manquant");
    }
    return this.http.get<Cloth>(this.apiUrl + idCloth, httpOptions);
  }

  getAllCloth(): Observable<Cloth[]>{
    return this.http.get<Cloth[]>(this.apiUrl, httpOptions);
  }

  deleteClothById(idCloth: number): Observable<Cloth>{
    if(!idCloth){
      alert("L'id n'est pas renseign");
    }
    return this.http.delete<Cloth>(this.apiUrl + idCloth, httpOptions);
  }

}
