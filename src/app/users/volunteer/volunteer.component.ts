import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VolunteerService} from "../../services/volunteer.service";
import {VolunteerModel} from "../../model/volunteer.model";

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  volunteers: VolunteerModel[] | undefined;

  constructor(private volunteerService: VolunteerService, private router: Router) {
  }


  ngOnInit(): void {
    //.suscribe = car la  fonction getAllVolunteers return un Observable
    this.volunteerService.getAllVolunteers().subscribe(volunteers => {
      console.log(volunteers);
      this.volunteers = volunteers;
    });

  }





}
