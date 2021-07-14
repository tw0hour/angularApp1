import { Component, OnInit } from '@angular/core';
import {Delivery} from "../../../models/delivery.models";
import {DeliveryServices} from "../../../services/delivery.services";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delivers-delivery',
  templateUrl: './delivers-delivery.component.html',
  styleUrls: ['./delivers-delivery.component.scss']
})
export class DeliversDeliveryComponent implements OnInit {

  deliversInDelivery: Delivery[] | undefined;
  constructor(private deliveryService: DeliveryServices, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {

    this.deliveryService.getAllDelivery().subscribe(obj => {
      console.log(obj);
      this.deliversInDelivery = obj;
    });
  }

  goToDeliveryIn(delivery_id:number | undefined){
    if(!delivery_id){
      console.log("id manquant");
      return;
    }
    this.cookieService.set('deliveryId',delivery_id.toString(),{expires:1,path:"/"} );
    this.router.navigate(["deliveryIn"]).then();
  }

}
