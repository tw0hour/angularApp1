import { Component, OnInit } from '@angular/core';
import {AssociationServices} from "../../services/association-services.service";
import {Association} from "../../models/associations.model";

@Component({
  selector: 'app-associations-connection',
  templateUrl: './associations-connection.component.html',
  styleUrls: ['./associations-connection.component.scss']
})
export class AssociationsConnectionComponent implements OnInit {

  association = new Association();

  constructor(private associationService: AssociationServices) { }

  ngOnInit(): void {
  }

  connection(){
    this.associationService.connection(this.association.name, this.association.password);
  }

}
