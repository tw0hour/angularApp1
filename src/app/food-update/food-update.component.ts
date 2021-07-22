import { Component, OnInit } from '@angular/core';
import {FoodServices} from "../services/food.services";
import {Food} from "../models/food.model";
import {TypeFood} from "../models/typeFood.model";
import {TypeFoodServices} from "../services/typeFood.services";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-food-update',
  templateUrl: './food-update.component.html',
  styleUrls: ['./food-update.component.scss']
})
export class FoodUpdateComponent implements OnInit {

  food = new Food();
  typesFood: TypeFood[] | undefined;


  constructor(private foodServices: FoodServices, private typeFoodServices: TypeFoodServices, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.typeFoodServices.getAllTypeFood().subscribe(types => {
      this.typesFood = types;
    });
    this.foodServices.getFoodById(parseInt(this.cookieService.get('foodId'))).subscribe(food=>{
      this.food=food;
    });
  }

  updateFood(){
    this.foodServices.updateFood(this.food);
  }

}
