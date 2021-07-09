import { Component, OnInit } from '@angular/core';
import {Association} from "../../models/associations.model";
import {AssociationServices} from "../../services/association-services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-associations-inscription',
  templateUrl: './associations-inscription.component.html',
  styleUrls: ['./associations-inscription.component.scss']
})
export class AssociationsInscriptionComponent implements OnInit {

  association = new Association();

  constructor(private associationService: AssociationServices,private router: Router) { }

  ngOnInit(): void {
  }

  inscriptionAssoc(){
    this.associationService.inscription(this.association).subscribe(inscrit => {
      console.log(inscrit);
    });
    this.router.navigate(["association/connection"]).then();
  }

  Cancel(){
    this.router.navigate(["association/connection"]).then();
  }

}
