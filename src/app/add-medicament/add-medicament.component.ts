import { Component, OnInit } from '@angular/core';
import {Medicament} from "../models/medicament.model";
import {MedicamentServices} from "../services/medicament.services";

@Component({
  selector: 'app-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.scss']
})
export class AddMedicamentComponent implements OnInit {

  medicament = new Medicament();

  constructor(private medicamentService: MedicamentServices) { }

  ngOnInit(): void {
  }

  addMedicament(){
    this.medicamentService.addMedicament(this.medicament).subscribe(medicamentAdded => {
      console.log(medicamentAdded);
    });
  }

}
