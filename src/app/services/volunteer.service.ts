import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {VolunteerModel} from "../model/volunteer.model";

//Préciser à Angular que les données retounées sont du JSON
const httpOptions = {
  headers: new HttpHeaders({'Contenet-type': 'applcation/html'})
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

  addVolunteer(volunteer: VolunteerModel): Observable<VolunteerModel>{
    return this.http.post<VolunteerModel>(this.apiUrl, volunteer, httpOptions);
  }

  inscription(volunteer: VolunteerModel): Observable<VolunteerModel>{
    return this.http.post<VolunteerModel>(this.apiUrl, volunteer, httpOptions);
  }

  deleteVolunteer(id : number) {
    return this.http.delete(this.apiUrl + id, httpOptions);
  }

  getVolunteerById(id: number){
    return this.http.put(this.apiUrl + id, httpOptions);
  }


}
