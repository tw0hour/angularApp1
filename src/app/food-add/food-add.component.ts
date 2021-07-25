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
  typesFood: TypeFood[] | undefined;
  dateNow:Date = new Date();

  constructor(private foodServices: FoodServices, private typeFoodServices: TypeFoodServices) { }

  ngOnInit(): void {
    this.typeFoodServices.getAllTypeFood().subscribe(types => {
      this.typesFood = types;
    });
  }

  addFood(){
    if(this.food.expirationDate!= undefined && this.toDate(this.food.expirationDate) > this.dateNow) {
      this.foodServices.addFood(this.food).subscribe();
    }
  }

  toDate(date: string): Date{
    return new Date(date);
  }

}
