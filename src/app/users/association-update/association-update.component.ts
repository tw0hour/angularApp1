import { Component, OnInit } from '@angular/core';
import {AssociationServices} from "../../services/association-services.service";
import {Association} from "../../models/associations.model";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-association-update',
  templateUrl: './association-update.component.html',
  styleUrls: ['./association-update.component.scss']
})
export class AssociationUpdateComponent implements OnInit {

  association:Association = new Association();

  constructor(private associationServices: AssociationServices, private cookieService: CookieService) { }

  ngOnInit(): void {

    this.associationServices.getAssociationById(parseInt(this.cookieService.get('associationId'))).subscribe(obj => {
      console.log(obj);
      this.association.id = obj.id;
      this.association.name = obj.name;
      this.association.password = obj.password;
      this.association.mail = obj.mail;
      this.association.money = obj.money;
    });
  }

  updateAssociation(){
    const assocId = this.cookieService.get('associationId');
    const assocPassword = this.association.password;

    console.log("assocId : " + assocId);

    if(!assocId) {
      alert("Vous n'avez pas accès à cette page veuilliez vous Connecter")
      return;
    }

    if(assocPassword){
      this.associationServices.updateAssociation(this.association);
      this.associationServices.updateAssociationPassword(parseInt(assocId), assocPassword);

    }
    else if(!assocPassword) {
      this.associationServices.updateAssociation(this.association);
    }

  }

}
