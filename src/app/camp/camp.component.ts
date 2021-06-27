import {Component, OnInit} from '@angular/core';
import {Camp} from "../models/camp.model";
import {CampServices} from "../services/camp.services";

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {

  camps: Camp[] | undefined;

  constructor(private campService: CampServices) {
  }

  ngOnInit(): void {
    this.campService.getAllCamp().subscribe(obj => {
      console.log(obj);
      this.camps = obj;
    });
  }

}
