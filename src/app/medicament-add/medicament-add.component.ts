import { Component, OnInit } from '@angular/core';
import {Medicament} from "../models/medicament.model";
import {MedicamentServices} from "../services/medicament.services";

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament-add.component.html',
  styleUrls: ['./medicament-add.component.scss']
})
export class MedicamentAddComponent implements OnInit {

  medicament = new Medicament();
  dateNow:Date = new Date();
  constructor(private medicamentService: MedicamentServices) { }

  ngOnInit(): void {
  }

  addMedicament(){
    if(this.medicament.expirationDate!= undefined && this.toDate(this.medicament.expirationDate) > this.dateNow) {
      this.medicamentService.addMedicament(this.medicament).subscribe(medicamentAdded => {
        console.log(medicamentAdded);
      });
    }
  }


  toDate(date: string): Date{
    return new Date(date);
  }

}
