import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {GenderCloth} from "../models/genderCloth.model";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class TypeClothServices {
  apiUrl: string = "http://localhost:3000/genderCloth/";

  constructor(private http: HttpClient) {
  }

  addGenderCloth(genderCloth: GenderCloth){
    if(!genderCloth.type){
      alert("Le nom du type n'est pas renseigné");
    }
    return this.http.post<GenderCloth>(this.apiUrl, genderCloth, httpOptions);
  }

  getAllGenderCloth(): Observable<GenderCloth[]>{
    return this.http.get<GenderCloth[]>(this.apiUrl, httpOptions);
  }

  getGenderClothById(idGenderCloth: number): Observable<GenderCloth>{
    if(!idGenderCloth){
      console.log("Id manquant");
    }
    return this.http.get<GenderCloth>(this.apiUrl + idGenderCloth, httpOptions);
  }

  deleteGenderClothById(idGenderCloth : number) {
    return this.http.delete(this.apiUrl + idGenderCloth, httpOptions);
  }

}
