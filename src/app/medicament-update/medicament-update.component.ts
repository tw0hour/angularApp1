import { Component, OnInit } from '@angular/core';
import {Medicament} from "../models/medicament.model";
import {MedicamentServices} from "../services/medicament.services";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-medicament-update',
  templateUrl: './medicament-update.component.html',
  styleUrls: ['./medicament-update.component.scss']
})
export class MedicamentUpdateComponent implements OnInit {

  medicament = new Medicament();

  constructor(private medicamentServices: MedicamentServices, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.medicamentServices.getMedicamentById(parseInt(this.cookieService.get('medocId'))).subscribe(medicament=>{
      this.medicament = medicament;
    });
  }

  updateMedicament(){
    this.medicamentServices.updateMedicament(this.medicament);
  }

}
