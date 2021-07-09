import { Component, OnInit } from '@angular/core';
import {AssociationServices} from "../../services/association-services.service";
import {Association} from "../../models/associations.model";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-associations-connection',
  templateUrl: './associations-connection.component.html',
  styleUrls: ['./associations-connection.component.scss']
})
export class AssociationsConnectionComponent implements OnInit {

  association = new Association();

  constructor(private associationService: AssociationServices, private cookieService: CookieService, private router: Router ) { }

  ngOnInit(): void {
  }

  connection(){
    //connexion de l'utilisateur
    this.associationService.connection(this.association.name, this.association.password);

    if (!this.association.name) return;

    //utilisation de la route getAssociationByName() pour pouvoir recuperer l'id de l'assciation
    this.associationService.getAssociationByName(this.association.name).subscribe(assoc => {
      if (!assoc.id) return;

      //mettre l'id de l'association dans un cookie
      this.cookieService.set('associationId', assoc.id.toString(), {expires: 1, path: "/"});
      const value: string = this.cookieService.get('associationId');
      console.log("Cookie connection :" + value);
    });
    this.router.navigate([""]).then();
  }

  inscription(){
    this.router.navigate(["association/inscription"]).then();
  }


}
