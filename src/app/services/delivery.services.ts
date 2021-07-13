import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Delivery} from "../models/delivery.models";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class DeliveryServices {
  apiUrl: string = "http://localhost:3000/delivery/";

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Delivery[]>{
    return this.http.get<Delivery[]>(this.apiUrl, httpOptions);
  }

  getAllDelivery(): Observable<Delivery[]>{
    return this.http.get<Delivery[]>(this.apiUrl + "delivery", httpOptions);
  }
  getAllDelivered(): Observable<Delivery[]>{
    return this.http.get<Delivery[]>(this.apiUrl + "delivered", httpOptions);
  }

  getDeliveryById(idDelivery: number): Observable<Delivery>{
    if(!idDelivery){
      console.log("Id manquant");
    }
    return this.http.get<Delivery>(this.apiUrl + idDelivery, httpOptions);
  }




}
