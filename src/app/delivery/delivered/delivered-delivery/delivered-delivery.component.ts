import { Component, OnInit } from '@angular/core';
import {Delivery} from "../../../models/delivery.models";
import {DeliveryServices} from "../../../services/delivery.services";

@Component({
  selector: 'app-delivered-delivery',
  templateUrl: './delivered-delivery.component.html',
  styleUrls: ['./delivered-delivery.component.scss']
})
export class DeliveredDeliveryComponent implements OnInit {

  deliveryDelivered: Delivery[] | undefined;
  constructor(private deliveryService: DeliveryServices) { }

  ngOnInit(): void {
    this.deliveryService.getAllDelivered().subscribe(obj => {
      console.log(obj);
      this.deliveryDelivered = obj;
    });
  }

}
