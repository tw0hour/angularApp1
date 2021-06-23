import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Medicament} from "../models/medicament.model";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class MedicamentServices {

  apiUrl: string = "http://localhost:3000/medicament/";

  constructor(private http: HttpClient){
  }

  addMedicament(medoc: Medicament): Observable<Medicament>{
    if(!medoc.name || !medoc.expirationDate){
      alert("Tous les champs doivent être remplis !");
    }
    return this.http.post<Medicament>(this.apiUrl, medoc, httpOptions);
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

}
