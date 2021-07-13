import { Component, OnInit } from '@angular/core';
import {Delivery} from "../../models/delivery.models";
import {DeliveryServices} from "../../services/delivery.services";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  delivers: Delivery[] | undefined;
  constructor(private deliveryService: DeliveryServices) { }

  ngOnInit(): void {
    this.deliveryService.getAll().subscribe(obj => {
      console.log(obj);
      this.delivers = obj;
    });
  }

}
