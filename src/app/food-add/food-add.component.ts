import { Component, OnInit } from '@angular/core';
import {FoodServices} from "../services/food.services";
import {Food} from "../models/food.model";
import {TypeFoodServices} from "../services/typeFood.services";
import {TypeFood} from "../models/typeFood.model";

@Component({
  selector: 'app-add-food',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  food = new Food();
  foodType = new TypeFood();
  typesFood: TypeFood[] | undefined;

  constructor(private foodServices: FoodServices, private typeFoodServices: TypeFoodServices) { }

  ngOnInit(): void {
    this.typeFoodServices.getAllTypeFood().subscribe(types => {
      this.typesFood = types;
    });
  }

  addFood(){
    console.log("---food-add.component / addFood()---");
    console.log("Id séléctionné : " + this.foodType.id);

    this.food.type_food_id = this.foodType.id;
    this.foodServices.addFood(this.food).subscribe();
  }

}
