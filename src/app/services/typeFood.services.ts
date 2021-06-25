import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TypeCloth} from "../models/typeCloth.model";
import {TypeFood} from "../models/typeFood.model";

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

  getAllTypeFood(): Observable<TypeFood[]>{
    return this.http.get<TypeFood[]>(this.apiUrl, httpOptions);
  }

}
