import { Component, OnInit } from '@angular/core';
import {Cloth} from "../models/cloth.model";
import {ClothServices} from "../services/cloth.services";
import {GenderClothServices} from "../services/genderCloth.services";
import {TypeCloth} from "../models/typeCloth.model";
import {GenderCloth} from "../models/genderCloth.model";
import {TypeClothServices} from "../services/typeCloth.services";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-cloth-update',
  templateUrl: './cloth-update.component.html',
  styleUrls: ['./cloth-update.component.scss']
})
export class ClothUpdateComponent implements OnInit {

  cloth = new Cloth();
  typesCloth: TypeCloth[] | undefined;
  gendersCloth: GenderCloth[] | undefined;

  constructor(private clothServices: ClothServices, private typeClothServices: TypeClothServices, private genderClothServices: GenderClothServices, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.genderClothServices.getAllGenderCloth().subscribe(genders => {
      this.gendersCloth = genders;
    });

    this.typeClothServices.getAllTypeCloth().subscribe(types => {
      this.typesCloth = types;
    });
    this.clothServices.getClothById(parseInt(this.cookieService.get('clothId'))).subscribe(cloth=>{
      this.cloth = cloth
    });
  }
  updateCloth(){

    if(!this.cloth.gender_cloth_id && !this.cloth.type_cloth_id) {
      this.clothServices.updateCloth(this.cloth);
    }

    else if(this.cloth.gender_cloth_id && !this.cloth.type_cloth_id){
      this.clothServices.updateCloth(this.cloth);
      this.clothServices.updateGenderCloth(this.cloth.gender_cloth_id);
    }

    else if(!this.cloth.gender_cloth_id && this.cloth.type_cloth_id){
      this.clothServices.updateCloth(this.cloth);
      this.clothServices.updateTypeCloth(this.cloth.type_cloth_id);
    }

    else if(this.cloth.gender_cloth_id && this.cloth.type_cloth_id){
      this.clothServices.updateCloth(this.cloth);
      this.clothServices.updateGenderCloth(this.cloth.gender_cloth_id);
      this.clothServices.updateTypeCloth(this.cloth.type_cloth_id);
    }
  }

}
