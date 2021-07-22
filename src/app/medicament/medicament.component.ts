import { Component, OnInit } from '@angular/core';
import {MedicamentServices} from "../services/medicament.services";
import {Medicament} from "../models/medicament.model";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

  medicaments: Medicament[] | undefined;

  constructor(private medicamentService: MedicamentServices,  private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.medicamentService.getAllMedicament().subscribe(obj => {
      console.log(obj);
      this.medicaments = obj;
    });
  }

  goToMedicamentUpdateForm(idMedoc: number | undefined){
    if(!idMedoc) {
      return;
    }

    this.cookieService.set('medocId', idMedoc.toString(), {expires: 1, path: "/"});

    this.router.navigate(["medicament/update"]);
  }

  deleteMedicamentById(idMedoc: number | undefined){
    if(!idMedoc){
      console.log("Id Manquant");
      return;
    }

    this.medicamentService.deleteMedicamentById(idMedoc).subscribe(medocDeleted => {
      console.log(medocDeleted);
    });

    window.location.reload();
  }

}
