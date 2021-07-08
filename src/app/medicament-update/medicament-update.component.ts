import { Component, OnInit } from '@angular/core';
import {Medicament} from "../models/medicament.model";
import {MedicamentServices} from "../services/medicament.services";

@Component({
  selector: 'app-medicament-update',
  templateUrl: './medicament-update.component.html',
  styleUrls: ['./medicament-update.component.scss']
})
export class MedicamentUpdateComponent implements OnInit {

  medicament = new Medicament();

  constructor(private medicamentServices: MedicamentServices) { }

  ngOnInit(): void {
  }

  updateMedicament(){
    this.medicamentServices.updateMedicament(this.medicament);
  }


}
