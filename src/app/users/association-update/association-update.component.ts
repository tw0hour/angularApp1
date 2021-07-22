import { Component, OnInit } from '@angular/core';
import {AssociationServices} from "../../services/association-services.service";
import {Association} from "../../models/associations.model";

@Component({
  selector: 'app-association-update',
  templateUrl: './association-update.component.html',
  styleUrls: ['./association-update.component.scss']
})
export class AssociationUpdateComponent implements OnInit {

  association = new Association();

  constructor(private associationServices: AssociationServices) { }

  ngOnInit(): void {
  }

  updateAssociation(){
    this.associationServices.updateAssociation(this.association);
  }

}
