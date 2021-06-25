import { Component, OnInit } from '@angular/core';
import {Medicament} from "../models/medicament.model";
import {MedicamentServices} from "../services/medicament.services";

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

  medicament = new Medicament();

  constructor(private medicamentService: MedicamentServices) { }

  ngOnInit(): void {
  }

  addMedicament(){
    this.medicamentService.addMedicament(this.medicament).subscribe(medicamentAdded => {
      console.log(medicamentAdded);
    });
  }

  getMedicamentById(){
    if(this.medicament.id === undefined) return
    this.medicamentService.getMedicamentById(this.medicament.id);
  }



}
