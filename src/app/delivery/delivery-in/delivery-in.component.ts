import { Component, OnInit } from '@angular/core';
import {Food} from "../../models/food.model";
import {Cloth} from "../../models/cloth.model";
import {Medicament} from "../../models/medicament.model";
import {FoodServices} from "../../services/food.services";
import {ClothServices} from "../../services/cloth.services";
import {MedicamentServices} from "../../services/medicament.services";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delivery-in',
  templateUrl: './delivery-in.component.html',
  styleUrls: ['./delivery-in.component.scss']
})
export class DeliveryInComponent implements OnInit {

  foodInDelivery: Food[] | undefined;
  clothInDelivery: Cloth[] | undefined;
  medicamentInDelivery: Medicament[] | undefined;
  constructor(private foodService: FoodServices,private clothService:ClothServices,private medicamentService:MedicamentServices, private cookieService: CookieService, private router: Router) {  }

  ngOnInit(): void {
    if(this.cookieService.check('deliveryId')){
      this.foodService.getFoodByDelivery(parseInt(this.cookieService.get('deliveryId'))).subscribe(obj => {
        console.log(obj);
        this.foodInDelivery = obj;
      });
      this.clothService.getClothByDelivery(parseInt(this.cookieService.get('deliveryId'))).subscribe(obj => {
        console.log(obj);
        this.clothInDelivery = obj;
      });
      this.medicamentService.getMedicamentByDelivery(parseInt(this.cookieService.get('deliveryId'))).subscribe(obj => {
        console.log(obj);
        this.medicamentInDelivery = obj;
      });
    }
  }

  goBack(){
    this.router.navigate(["delivery"]).then();
  }
}
