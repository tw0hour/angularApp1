import { Component, OnInit } from '@angular/core';
import {MedicamentServices} from "../services/medicament.services";
import {Medicament} from "../models/medicament.model";

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

  medicaments: Medicament[] | undefined;

  constructor(private medicamentService: MedicamentServices) { }

  ngOnInit(): void {
    this.medicamentService.getAllMedicament().subscribe(obj => {
      console.log(obj);
      this.medicaments = obj;
    });
  }

}
