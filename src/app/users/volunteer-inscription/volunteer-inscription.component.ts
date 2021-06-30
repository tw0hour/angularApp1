import { Component, OnInit } from '@angular/core';
import {VolunteerService} from "../../services/volunteer.service";
import {VolunteerModel} from "../../models/volunteer.model";

@Component({
  selector: 'app-volunteer-inscription',
  templateUrl: './volunteer-inscription.component.html',
  styleUrls: ['./volunteer-inscription.component.scss']
})
export class VolunteerInscriptionComponent implements OnInit {

  volunteer = new VolunteerModel();

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit(): void {

  }

  inscription(){
    this.volunteerService.inscription(this.volunteer).subscribe(inscrit => {
      console.log(inscrit);
    });
  }

}
