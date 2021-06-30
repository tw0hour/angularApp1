import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {VolunteerModel} from "../models/volunteer.model";

//Préciser à Angular que les données retounées par les routes sont du JSON
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})

export class VolunteerService {
  apiUrl: string = "http://localhost:3000/volunteer/";

  constructor(private http: HttpClient) {
  }

  getAllVolunteers(): Observable<VolunteerModel[]>{
    return this.http.get<VolunteerModel[]>(this.apiUrl);
  }

  inscription(volunteer: VolunteerModel): Observable<VolunteerModel>{
    if (!volunteer.name || !volunteer.mail || !volunteer.password || !volunteer.type){
      alert("Tous les champs doivent être remplis !");
    }
    return this.http.post<VolunteerModel>(this.apiUrl, volunteer, httpOptions);
  }

  connection(name: string | undefined, password: string | undefined): boolean | null{
    if(name === undefined || password === undefined){
      alert("Tous les champs doivent être remplis !");
      return null;
    }
    if(this.http.post(this.apiUrl + "/connection", httpOptions)){
      alert("Bonjour " + name + " !");
      return true;
    }
    else{
      alert("Informations de connexion erronnées");
      return false;
    }
  }

  getVolunteerById(id: number){
    return this.http.put(this.apiUrl + id, httpOptions);
  }

  deleteVolunteer(id : number) {
    return this.http.delete(this.apiUrl + id, httpOptions);
  }

}
