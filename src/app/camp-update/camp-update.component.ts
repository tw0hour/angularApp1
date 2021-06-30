import { Component, OnInit } from '@angular/core';
import {CampServices} from "../services/camp.services";
import {Camp} from "../models/camp.model";

@Component({
  selector: 'app-camp-update',
  templateUrl: './camp-update.component.html',
  styleUrls: ['./camp-update.component.scss']
})
export class CampUpdateComponent implements OnInit {

  camp = new Camp()

  constructor(private campServices: CampServices) { }

  ngOnInit(): void {

  }

  updateCamp(){
    this.campServices.updateCamp(this.camp);
  }

}
