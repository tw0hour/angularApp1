import { Component, OnInit } from '@angular/core';
import {Cloth} from "../models/cloth.model";
import {ClothServices} from "../services/cloth.services";
import {TypeClothServices} from "../services/typeCloth.services";
import {TypeCloth} from "../models/typeCloth.model";
import {GenderClothServices} from "../services/genderCloth.services";
import {GenderCloth} from "../models/genderCloth.model";

@Component({
  selector: 'app-cloth-add',
  templateUrl: './cloth-add.component.html',
  styleUrls: ['./cloth-add.component.scss']
})
export class ClothAddComponent implements OnInit {

  cloth = new Cloth();
  typesCloth: TypeCloth[] | undefined;
  gendersCloth: GenderCloth[] | undefined;

  constructor(private clothServices: ClothServices, private typeClothServices: TypeClothServices, private  genderClothServices: GenderClothServices) { }

  ngOnInit(): void {
    this.genderClothServices.getAllGenderCloth().subscribe(genders => {
      this.gendersCloth = genders;
    });

    this.typeClothServices.getAllTypeCloth().subscribe(types => {
      this.typesCloth = types;
    });
  }

  addCloth(){
    this.clothServices.addCloth(this.cloth).subscribe();
  }

}
