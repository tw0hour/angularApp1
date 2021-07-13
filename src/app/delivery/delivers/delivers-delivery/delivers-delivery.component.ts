import { Component, OnInit } from '@angular/core';
import {Delivery} from "../../../models/delivery.models";
import {DeliveryServices} from "../../../services/delivery.services";

@Component({
  selector: 'app-delivers-delivery',
  templateUrl: './delivers-delivery.component.html',
  styleUrls: ['./delivers-delivery.component.scss']
})
export class DeliversDeliveryComponent implements OnInit {

  deliversInDelivery: Delivery[] | undefined;
  constructor(private deliveryService: DeliveryServices) { }

  ngOnInit(): void {

    this.deliveryService.getAllDelivery().subscribe(obj => {
      console.log(obj);
      this.deliversInDelivery = obj;
    });
  }

}
