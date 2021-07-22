import {Component,  OnInit} from '@angular/core';
import { AssociationServices } from "../../services/association-services.service";
import { Association } from "../../models/associations.model";
import { Router } from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-association',
   templateUrl: './association.component.html'
})
export class AssociationComponent implements OnInit {

  association = new Association() ;

  constructor(private associationService : AssociationServices, private cookieService: CookieService,private router: Router) {
    //private cookieService: CookieService,private router: Router
    if (! this.cookieService.check('associationId')){
        this.router.navigate(["association/connection"]).then();
    }
  }


  ngOnInit(): void {
    const assocId = this.cookieService.get('associationId');

    this.associationService.getAssociationById(parseInt(assocId)).subscribe(obj => {
        this.association = obj;
    });

  }

  goToAssociationUpdateForm(idAssociation: number | undefined){
    if(!idAssociation) {
      return;
    }
    //this.cookieService.set('foodId', idFood.toString(), {expires: 1, path: "/"});

    this.router.navigate(["association/update"]);
  }


}
