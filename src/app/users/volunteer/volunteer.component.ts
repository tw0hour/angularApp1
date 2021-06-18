import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  @Input() volunteer: { id: number; nom: string; password: string; type: string; } | undefined;

  ngOnInit(): void {
  }





}
