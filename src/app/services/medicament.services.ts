import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Medicament} from "../models/medicament.model";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class MedicamentServices {

  apiUrl: string = "http://localhost:3000/medicament/";

  constructor(private http: HttpClient, private cookieService: CookieService){
  }

  addMedicament(medoc: Medicament): Observable<Medicament>{
    if(!medoc.name || !medoc.expirationDate){
      alert("Tous les champs doivent être remplis !");
    }
    medoc.association_id = parseInt(this.cookieService.get('associationId'));

    console.log("Nom médicament:" + medoc.name);
    console.log("Id Cookie ajout médicament:" + medoc.association_id);
    console.log("Date ajout médicament:" + medoc.expirationDate);

    if(!medoc.association_id){
      alert("Id volontaire manquant, problème avec le cookie");
    }
    return this.http.post<Medicament>(this.apiUrl + "association/" , medoc, httpOptions);
  }

  getMedicamentById(idMedoc: number): Observable<Medicament>{
    if(!idMedoc){
      console.log("Id manquant");
    }
    return this.http.get<Medicament>(this.apiUrl + idMedoc, httpOptions);
  }

  getAllMedicament(): Observable<Medicament[]>{
    return this.http.get<Medicament[]>(this.apiUrl, httpOptions);
  }

  updateMedicament(medoc: Medicament){
    console.log("-------medicaments.services.ts-------");
    console.log("-------updateMedicament()-------");
    console.log("Cookie Medoc id : " + this.cookieService.get('medocId'));

    const idCookieMedoc = parseInt(this.cookieService.get('medocId'));

    console.log("Medoc id : " + medoc.id);
    console.log("Camp name : " + medoc.name);
    console.log("Camp expirationDate : " + medoc.expirationDate);
    console.log("Camp volunteer_id : " + medoc.volunteer_id);
    console.log("Camp delivery_id : " + medoc.delivery_id);
    console.log("-------------------------------------");

    this.http.put<Medicament>(this.apiUrl + idCookieMedoc, medoc, httpOptions).subscribe(data => {
      console.log(data);
    })
  }

  deleteMedicamentById(idMedoc: number | undefined){
    if(!idMedoc){
      console.log("Id manquant");
    }
    return this.http.delete<Medicament>(this.apiUrl + idMedoc, httpOptions);
  }

  getMedicamentByDelivery(delivery_id:number){
    if (delivery_id){
      console.log('id manquant');
    }
    return this.http.get<Medicament[]>(this.apiUrl + "delivery/" + delivery_id, httpOptions);
  }

}
