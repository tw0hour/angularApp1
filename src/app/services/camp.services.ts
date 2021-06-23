import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Camp} from "../models/camp.model";
import {Medicament} from "../models/medicament.model";

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CampServices {

  apiUrl: string = "http://localhost:3000/camp/";

  constructor(private http: HttpClient){
  }

  /**
   * Signaler un nouveau Camp
   * @param camp
   */
  reportCamp(camp: Camp): Observable<Camp>{
    if (!camp.nbPeople || !camp.city || !camp.address || !camp.postalCode){
      alert("Tous les champs doivent être remplis !");
    }
    return this.http.post<Camp>(this.apiUrl, camp, httpOptions);
  }

  getAllCamp(): Observable<Camp[]>{
    return this.http.get<Camp[]>(this.apiUrl);
  }

  getCampById(idCamp: number): Observable<Camp>{
    if(!idCamp){
      console.log("Id manquant");
    }
    return this.http.get<Camp >(this.apiUrl + idCamp, httpOptions);
  }

}
