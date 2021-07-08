import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TypeFood} from "../models/typeFood.model";
import {TypeCloth} from "../models/typeCloth.model";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class TypeFoodServices {

  apiUrl: string = "http://localhost:3000/typeFood/";

  constructor(private http: HttpClient) {
  }

  addTypeFood(typeFood: TypeCloth){
    if(!typeFood.type){
      alert("Le nom n'est pas renseigné");
    }
    return this.http.post<TypeFood>(this.apiUrl, typeFood, httpOptions);
  }

  getAllTypeFood(): Observable<TypeFood[]>{
    return this.http.get<TypeFood[]>(this.apiUrl, httpOptions);
  }

  getTypeFoodById(idTypeFood: number): Observable<TypeCloth>{
    if(!idTypeFood){
      console.log("Id manquant");
    }
    return this.http.get<TypeFood>(this.apiUrl + idTypeFood, httpOptions);
  }

  deleteTypeFoodhById(idTypeFood : number) {
    return this.http.delete(this.apiUrl + idTypeFood, httpOptions);
  }

}
