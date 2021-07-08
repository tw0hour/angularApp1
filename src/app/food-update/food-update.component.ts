import { Component, OnInit } from '@angular/core';
import {FoodServices} from "../services/food.services";
import {Food} from "../models/food.model";

@Component({
  selector: 'app-food-update',
  templateUrl: './food-update.component.html',
  styleUrls: ['./food-update.component.scss']
})
export class FoodUpdateComponent implements OnInit {

  food = new Food();

  constructor(private foodServices: FoodServices) { }

  ngOnInit(): void {
  }

  updateFood(){
    this.foodServices.updateFood(this.food);
  }

}
