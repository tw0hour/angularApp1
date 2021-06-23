import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TypeCloth} from "../models/typeCloth.model";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class TypeClothServices {
  apiUrl: string = "http://localhost:3000/typeCloth/";

  constructor(private http: HttpClient){
  }

  addTypeCloth(typeCloth: TypeCloth){
    if(!typeCloth.type){
      alert("Le nom n'est pas renseigné");
    }
    return this.http.post<TypeCloth>(this.apiUrl, typeCloth, httpOptions);
  }

  getAllTypeCloth(): Observable<TypeCloth[]>{
    return this.http.get<TypeCloth[]>(this.apiUrl, httpOptions);
  }

  getTypeClothById(idTypeCloth: number): Observable<TypeCloth>{
    if(!idTypeCloth){
      console.log("Id manquant");
    }
    return this.http.get<TypeCloth>(this.apiUrl + idTypeCloth, httpOptions);
  }

  deleteTypeClothById(idTypeCloth : number) {
    return this.http.delete(this.apiUrl + idTypeCloth, httpOptions);
  }

}
