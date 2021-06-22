import { Component, OnInit } from '@angular/core';
import {Camp} from "../models/camp.model";
import {CampServices} from "../services/camp.services";


export interface CampProps {
  id?:number;
  nbPeople:number | undefined;
  city:string | undefined;
  address:string | undefined;
  postalCode: number | undefined;
  association_id:number | undefined;
  planning_camp_id:number | undefined;
}

@Component({
  selector: 'app-camp-report',
  templateUrl: './camp-report.component.html',
  styleUrls: ['./camp-report.component.scss']
})

export class CampReportComponent implements OnInit {

  camp = new Camp();

  constructor(private campService: CampServices) { }

  ngOnInit(): void {
  }

  reportCamp(){
    console.log("camp report components :" + this.camp.nbPeople);
    console.log("camp report components :" + this.camp.city);
    console.log("camp report components :" + this.camp.address);
    console.log("camp report components :" + this.camp.postalCode);

    this.campService.reportCamp(this.camp).subscribe(signalement => {
      console.log(signalement);
    });
  }

}
