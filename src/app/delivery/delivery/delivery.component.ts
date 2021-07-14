import { Component, OnInit } from '@angular/core';
import {Delivery} from "../../models/delivery.models";
import {DeliveryServices} from "../../services/delivery.services";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  delivers: Delivery[] | undefined;
  constructor(private deliveryService: DeliveryServices, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.deliveryService.getAll().subscribe(obj => {
      console.log(obj);
      this.delivers = obj;
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
