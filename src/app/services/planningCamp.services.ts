import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {GenderCloth} from "../models/genderCloth.model";
import {PlanningCamp} from "../models/planningCamp.model";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class TypeClothServices {
  apiUrl: string = "http://localhost:3000/planningCamp/";

  constructor(private http: HttpClient) {
  }

  addPlanningCamp(planningCamp: PlanningCamp){
    if(!planningCamp.day || planningCamp.time_slots){
      alert("Tous les champs ne sont pas renseigné");
    }
    return this.http.post<PlanningCamp>(this.apiUrl, planningCamp, httpOptions);
  }

  getAllPlanningCamp(): Observable<PlanningCamp[]>{
    return this.http.get<PlanningCamp[]>(this.apiUrl, httpOptions);
  }

  getGenderClothById(idPlanning: number): Observable<PlanningCamp>{
    if(!idPlanning){
      console.log("Id manquant");
    }
    return this.http.get<PlanningCamp>(this.apiUrl + idPlanning, httpOptions);
  }

  deleteGenderClothById(idPlanning : number) {
    return this.http.delete(this.apiUrl + idPlanning, httpOptions);
  }

}
