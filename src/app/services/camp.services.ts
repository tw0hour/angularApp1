import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Camp} from "../models/camp.model";
import {CookieService} from "ngx-cookie-service";

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CampServices {

  apiUrl: string = "http://localhost:3000/camp/";

  constructor(private http: HttpClient, private cookieService: CookieService){
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
    return this.http.get<Camp>(this.apiUrl + idCamp, httpOptions);
  }

  updateCamp(camp: Camp){
    console.log("-------camp.services.ts-------");
    console.log("-------updateCamp()-------");
    console.log("Cookie Camp id : " + this.cookieService.get('campId'));

    const idCookieCamp = parseInt(this.cookieService.get('campId'));

    console.log("Camp id : " + camp.id);
    console.log("Camp nbPeople : " + camp.nbPeople);
    console.log("Camp city : " + camp.city);
    console.log("Camp address : " + camp.address);
    console.log("Camp postalCode : " + camp.postalCode);
    console.log("-------------------------------------");

    this.http.put<Camp>(this.apiUrl + idCookieCamp, camp, httpOptions).subscribe( data =>{
      console.log(data);
    });

  }

  deleteCampById(idCamp: number | undefined){
    if(!idCamp){
      console.log("Id manquant");
    }
    return this.http.delete<Camp >(this.apiUrl + idCamp, httpOptions);
  }

}
