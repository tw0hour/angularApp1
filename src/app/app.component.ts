import { Component } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import {AssociationServices} from "./services/association-services.service";
import {Association} from "./models/associations.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApp1';
  public isAuth: boolean = this.cookieService.check('associationId');

  association = new Association()

  constructor(private cookieService: CookieService, private router: Router, private associationServices: AssociationServices) {}

  ngOnInit(): void{
    if (!this.isAuth)
    {
      this.router.navigate(["association/connection"]).then();
    }
    else
    {
      this.router.navigate([""]).then();

      const assocId = parseInt(this.cookieService.get('associationId'));
      this.associationServices.getAssociationById(assocId).subscribe(assoc => {
        this.association = assoc;
      });
    }

  }

  logout(){
    this.cookieService.delete('associationId',"/");
    // pour laisser le temps de prendre en compte la suppression du cookie (front de la navbar)
    setInterval(()=>{window.location.reload();},500);
    this.router.navigate(["association/connection"]).then();
  }
}


