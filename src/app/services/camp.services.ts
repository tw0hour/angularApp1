import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Camp} from "../models/camp.model";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export interface CampProps {
  id?:number;
  nbPeople:number | undefined;
  city:string | undefined;
  address:string | undefined;
  postalCode: number | undefined;
  association_id:number | undefined;
  planning_camp_id:number | undefined;
}

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
    return this.http.post<Camp>(this.apiUrl, Camp, httpOptions);
  }

}
