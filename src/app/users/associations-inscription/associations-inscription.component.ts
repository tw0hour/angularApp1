import { Component, OnInit } from '@angular/core';
import {Association} from "../../models/associations.model";
import {AssociationServices} from "../../services/association-services.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-associations-inscription',
  templateUrl: './associations-inscription.component.html',
  styleUrls: ['./associations-inscription.component.scss']
})
export class AssociationsInscriptionComponent implements OnInit {

  association = new Association();

  constructor(private associationService: AssociationServices) { }

  ngOnInit(): void {
  }

  inscriptionAssoc(){
    this.associationService.inscription(this.association).subscribe(inscrit => {
      console.log(inscrit);
    });

  }



}
