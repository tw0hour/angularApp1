import { Component, OnInit } from '@angular/core';
import {ClothServices} from "../services/cloth.services";
import {Cloth} from "../models/cloth.model";

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss']
})
export class ClothComponent implements OnInit {

  cloths: Cloth[] | undefined;

  constructor(private clothServices: ClothServices) { }

  ngOnInit(): void {
    this.clothServices.getAllCloth().subscribe(obj => {
      console.log(obj);
      this.cloths = obj;
    });
  }

}
