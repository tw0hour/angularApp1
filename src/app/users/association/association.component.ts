import {Component, Input, OnInit} from '@angular/core';
import { AssociationServices } from "../../services/association-services.service";
import { Association } from "../../model/associations.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-association',
   templateUrl: './association.component.html',
  // styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {

  //@Input() association: { id: number; name: string; mail: string; password: string; money: number;} | undefined;

  associations : Association[] | undefined;

  constructor(private associationService : AssociationServices,
              private router :Router) {

    //this.produits = produitService.listeProduit();

  }

  ngOnInit(): void {
    this.associationService.listAssociation().subscribe(obj => {
      console.log(obj);
      this.associations = obj;
    });
  }

}
