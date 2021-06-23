import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Food} from "../models/food.model";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class TypeClothServices {
  apiUrl: string = "http://localhost:3000/food/";

  constructor(private http: HttpClient) {
  }

  addFood(food: Food){
    if(!food.name || !food.expirationDate || !food.volunteer_id  || !food.type_food_id){
      alert("Veuillez rempir tous les champs");
    }
    return this.http.post<Food>(this.apiUrl, food, httpOptions);
  }

  getAllFood(): Observable<Food[]>{
    return this.http.get<Food[]>(this.apiUrl, httpOptions);
  }

  getFoodById(idFood: number): Observable<Food>{
    if(!idFood){
      console.log("Id manquant");
    }
    return this.http.get<Food>(this.apiUrl + idFood, httpOptions);
  }

  deleteFoodById(idFood : number) {
    return this.http.delete(this.apiUrl + idFood, httpOptions);
  }


}
