import {Component, OnInit} from '@angular/core';
import {Camp} from "../models/camp.model";
import {CampServices} from "../services/camp.services";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {

  camp = new Camp();
  camps: Camp[] | undefined;

  constructor(private campService: CampServices, private cookieService: CookieService, private router: Router) {
  }

  ngOnInit(): void {
    this.campService.getAllCamp().subscribe(obj => {
      this.camps = obj;
    });
  }

  deleteCampById(idCamp: number | undefined){
    if(!idCamp) {
      return;
    }

    this.campService.deleteCampById(idCamp).subscribe(campDeleted => {
      console.log(campDeleted);
    });
    window.location.reload();
  }

  /**
   * Redirige vers le formulaire de mise à jour en mettant l'id du camp dans un Cookie
   */
  goToCampUpdateForm(idCamp: number | undefined){
    if(!idCamp) {
      return;
    }
    this.cookieService.set('campId', idCamp.toString(), {expires: 1, path: "/"});
    this.router.navigate(["camp/update"]);
  }


}
