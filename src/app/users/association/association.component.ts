import {Component, Input, OnInit} from '@angular/core';
import { AssociationServices } from "../../services/association-services.service";
import { Association } from "../../models/associations.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-association',
   templateUrl: './association.component.html'
})
export class AssociationComponent implements OnInit {

  associations : Association[] | undefined;

  constructor(private associationService : AssociationServices) {

  }

  ngOnInit(): void {
    this.associationService.listAssociation().subscribe(obj => {
      console.log(obj);
      this.associations = obj;
    });
  }

}
