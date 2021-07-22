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
    if(!food.name || !food.expirationDate || !food.type_food_id){
      alert("Veuillez rempir tous les champs");
    }

    food.association_id = parseInt(this.cookieService.get('associationId'));

    if(!food.association_id){
      alert("Id association manquant, problème avec le cookie");
    }
    return this.http.post<Food>(this.apiUrl + "association/", food, httpOptions);
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

  updateFood(food: Food){

    const idCookieFood = parseInt(this.cookieService.get('foodId'));

    this.http.put<Food>(this.apiUrl + idCookieFood, food, httpOptions).subscribe( data =>{
      console.log(data);
    });
  }

  deleteFoodById(idFood : number) {
    if(!idFood){
      console.log("Id manquant");
    }
    return this.http.delete(this.apiUrl + idFood, httpOptions);
  }

  getFoodByDelivery(delivery_id:number){
    if(!delivery_id){
      console.log("id manquant");
    }
    return this.http.get<Food[]>(this.apiUrl + "delivery/" + delivery_id, httpOptions);
  }

}
