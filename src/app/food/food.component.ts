import { Component, OnInit } from '@angular/core';
import {Food} from "../models/food.model";
import {FoodServices} from "../services/food.services";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  foods: Food[] | undefined;

  constructor(private foodServices: FoodServices) { }

  ngOnInit(): void {
    this.foodServices.getAllFood().subscribe(obj => {
      console.log(obj);
      this.foods = obj;
    });
  }

}
