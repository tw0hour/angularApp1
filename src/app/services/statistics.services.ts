import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class StatisticsServices {
  apiUrl: string = "http://localhost:3000/donation/";
  apiAssociationUrl: string = "http://localhost:3000/association/";

  constructor(private http: HttpClient){
  }

  /**
   * Nombre total de donation
   * @param associationId
   */
  nbDonation(associationId: number): Observable<number>{
    if(associationId === undefined){
      alert("Id association manquant");
    }
    return this.http.get<number>(this.apiUrl + "/nbDonation/" + associationId, httpOptions);
  }

  /**
   * Somme de toutes les donations
   * @param associationId
   */
  totalDonation(associationId: number): Observable<number>{
    if(associationId === undefined){
      alert("Id association manquant");
    }
    return this.http.get<number>(this.apiUrl + "/totalDonation/" + associationId, httpOptions);
  }

  /**
   * Donation avec le montant le plus élévé
   * @param associationId
   */
  maxDonation(associationId: number): Observable<number>{
    if(associationId === undefined){
      alert("Id association manquant");
    }
    return this.http.get<number>(this.apiUrl + "/maxDonation/" + associationId, httpOptions);
  }

  /**
   * Retourne le nom et la quantité de la table qu'il a le moins de stock
   * @param associationId
   */
  needs(associationId: number): Observable<{ name: string; quantity: number }[] | null>{
    if(associationId === undefined){
      alert("Id association manquant");
    }
    return this.http.get<{ name: string; quantity: number }[] | null>(this.apiAssociationUrl + "needs/" + associationId, httpOptions);
  }
}
