import { Component, OnInit } from '@angular/core';
import {FoodServices} from "../services/food.services";
import {Food} from "../models/food.model";
import {TypeFoodServices} from "../services/typeFood.services";
import {TypeFood} from "../models/typeFood.model";

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

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
    this.food.type_food_id = this.foodType.id;
    console.log("Id type food : " + this.foodType.id)
    this.foodServices.addFood(this.food).subscribe();
  }

}
