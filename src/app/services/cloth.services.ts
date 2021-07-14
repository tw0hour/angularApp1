import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Cloth} from "../models/cloth.model";
import {Observable} from "rxjs";
import {Food} from "../models/food.model";
import {CookieService} from "ngx-cookie-service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class ClothServices {

  apiUrl: string = "http://localhost:3000/cloth/";

  constructor(private http: HttpClient, private cookieService: CookieService){
  }


  addCloth(cloth: Cloth): Observable<Cloth>{
    if(!cloth.name || !cloth.size || !cloth.gender){
      alert("Tous les champs doivent être remplis !");
    }
    return this.http.post<Cloth>(this.apiUrl, cloth, httpOptions);
  }

  getClothById(idCloth: number): Observable<Cloth>{
    if(!idCloth){
      console.log("Id manquant");
    }
    return this.http.get<Cloth>(this.apiUrl + idCloth, httpOptions);
  }

  getAllCloth(): Observable<Cloth[]>{
    return this.http.get<Cloth[]>(this.apiUrl, httpOptions);
  }

  updateCloth(cloth: Cloth){

    console.log("-------cloth.services.ts-------");
    console.log("-------updateCloth()-------");
    console.log("Cookie Cloth id : " + this.cookieService.get('clothId'));
    const idCookieCloth = parseInt(this.cookieService.get('clothId'));

    console.log("Cloth id : " + cloth.id);
    console.log("Cloth name : " + cloth.name);
    console.log("Cloth gender : " + cloth.gender);
    console.log("-------------------------------------");

    this.http.put<Food>(this.apiUrl + idCookieCloth, cloth, httpOptions).subscribe( data =>{
      console.log(data);
    });
  }

  deleteClothById(idCloth: number): Observable<Cloth>{
    if(!idCloth){
      alert("L'id n'est pas renseign");
    }
    return this.http.delete<Cloth>(this.apiUrl + idCloth, httpOptions);
  }

  getClothByDelivery(delivery_id:number){
    if (delivery_id){
      console.log('id manquant');
    }
    return this.http.get<Cloth[]>(this.apiUrl + "delivery/" + delivery_id, httpOptions);
  }

}
