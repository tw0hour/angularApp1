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

  associations : Association[] | undefined;

  constructor(private associationService : AssociationServices, private cookieService: CookieService,private router: Router) {
    //private cookieService: CookieService,private router: Router
    if (! this.cookieService.check('associationId')){
        this.router.navigate(["association/connection"]).then();
    }
  }


  ngOnInit(): void {
    this.associationService.listAssociation().subscribe(obj => {
      console.log(obj);
      this.associations = obj;
    });
  }

}
