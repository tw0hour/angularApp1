import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Food} from "../models/food.model";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class FoodServices {
  apiUrl: string = "http://localhost:3000/food/";

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  addFood(food: Food){
    console.log("Id typeFood: " + food.type_food_id);
    if(!food.name || !food.expirationDate || !food.volunteer_id  || !food.type_food_id){
      alert("Veuillez rempir tous les champs");
    }

    food.volunteer_id = parseInt(this.cookieService.get('associationId'));

    console.log("Nom Food:" + food.name);
    console.log("Id Cookie ajout typeFood:" + food.volunteer_id);
    console.log("Date addFood : " + food.expirationDate);

    if(!food.volunteer_id){
      alert("Id volontaire manquant, problème avec le cookie");
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
