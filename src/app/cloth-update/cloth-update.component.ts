import { Component, OnInit } from '@angular/core';
import {Cloth} from "../models/cloth.model";
import {ClothServices} from "../services/cloth.services";

@Component({
  selector: 'app-cloth-update',
  templateUrl: './cloth-update.component.html',
  styleUrls: ['./cloth-update.component.scss']
})
export class ClothUpdateComponent implements OnInit {

  cloth = new Cloth();

  constructor(private clothServices: ClothServices) { }

  ngOnInit(): void {
  }
  updateCloth(){
    this.clothServices.updateCloth(this.cloth);
  }

}
