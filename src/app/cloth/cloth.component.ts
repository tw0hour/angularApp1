import { Component, OnInit } from '@angular/core';
import {ClothServices} from "../services/cloth.services";
import {Cloth} from "../models/cloth.model";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss']
})
export class ClothComponent implements OnInit {

  cloths: Cloth[] | undefined;

  constructor(private clothServices: ClothServices, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.clothServices.getAllCloth().subscribe(obj => {
      console.log(obj);
      this.cloths = obj;
    });
  }

  deleteClothById(idCloth: number | undefined){
    if(!idCloth) {
      console.log("Id Manquant");
      return;
    }

    this.clothServices.deleteClothById(idCloth).subscribe(clothDeleted => {
      console.log(clothDeleted);
    });
    window.location.reload();
  }

  /**
   * Redirige vers le formulaire de mise à jour mettant l'id du vêtement dans un Cookie
   */
  goToClothUpdateForm(idCloth: number | undefined){
    if(!idCloth) {
      console.log("Id Manquant");
      return;
    }

    this.cookieService.set('clothId', idCloth.toString(), {expires: 1, path: "/"});

    this.router.navigate(["cloth/update"]);
  }

}
