import { Component, OnInit } from '@angular/core';
import {VolunteerService} from "../../services/volunteer.service";
import {VolunteerModel} from "../../models/volunteer.model";

@Component({
  selector: 'app-volunteer-connection',
  templateUrl: './volunteer-connection.component.html',
  styleUrls: ['./volunteer-connection.component.scss']
})
export class VolunteerConnectionComponent implements OnInit {

  volunteer = new VolunteerModel()

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit(): void {
  }

  connection(){
    this.volunteerService.connection(this.volunteer.name, this.volunteer.password);
  }

}
