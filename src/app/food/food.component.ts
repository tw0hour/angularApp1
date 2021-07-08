import { Component, OnInit } from '@angular/core';
import {Food} from "../models/food.model";
import {FoodServices} from "../services/food.services";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  foods: Food[] | undefined;

  constructor(private foodServices: FoodServices, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.foodServices.getAllFood().subscribe(obj => {
      console.log(obj);
      this.foods = obj;
    });
  }

  deleteFoodById(idFood: number | undefined){
    if(!idFood) {
      console.log("Id Manquant");
      return;
    }

    this.foodServices.deleteFoodById(idFood).subscribe(foodDeleted => {
      console.log(foodDeleted);
    });
  }

  /**
   * Redirige vers le formulaire de mise à jour mettant l'id de l'aliment dans un Cookie
   */
  goToFoodUpdateForm(idFood: number | undefined){
    if(!idFood) {
      console.log("--- food.component ---");
      console.log("--- goToFoodUpdateForm() ---");
      console.log("Id Manquant");
      return;
    }
    console.log("--- food.component ---");
    console.log("--- goToFoodUpdateForm() ---");
    console.log("IdFood : " + idFood);
    console.log("-----------------------------");

    this.cookieService.set('foodId', idFood.toString(), {expires: 1, path: "/"});

    //debug
    const value: string = this.cookieService.get('foodId');
    console.log("Cookie foodId :" + value);
    //debug

    this.router.navigate(["food/update"]);
  }

}
