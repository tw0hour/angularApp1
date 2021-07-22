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
    if(!cloth.name || !cloth.size){
      alert("Tous les champs doivent être remplis !");
    }

    if(!cloth.gender_cloth_id){
      alert("gender_cloth_id manquant");
    }

    cloth.association_id = parseInt(this.cookieService.get('associationId'));

    if(!cloth.association_id){
      alert("Id association manquant, problème avec le cookie");
    }
    return this.http.post<Cloth>(this.apiUrl + "association/", cloth, httpOptions);
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
    const idCookieCloth = parseInt(this.cookieService.get('clothId'));

    this.http.put<Food>(this.apiUrl + idCookieCloth, cloth, httpOptions).subscribe( data =>{
      console.log(data);
    });
  }

  updateGenderCloth(idGender: number){
    const idCloth = parseInt(this.cookieService.get('clothId'));
    if(!idCloth){
      console.log("idCloth manquant");
      return;
    }
    if(!idGender){
      console.log("idGender manquant");
      return;
    }

    this.http.put(this.apiUrl + "cloth/" + idCloth + "/GenderCloth/" + idGender, httpOptions).subscribe( data =>{
      console.log(data);
    });

  }

  updateTypeCloth(idType: number){
    const idCloth = parseInt(this.cookieService.get('clothId'));
    if(!idCloth){
      console.log("idCloth manquant");
      return;
    }
    if(!idType){
      console.log("idGender manquant");
      return;
    }

    this.http.put(this.apiUrl + "cloth/" + idCloth + "/TypeCloth/" + idType, httpOptions).subscribe( data =>{
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
