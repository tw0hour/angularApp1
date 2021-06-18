import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {

  @Input() camp: { id: number; nbPeople: number; city: string; address: string; postalCode: number; } | undefined

  ngOnInit(): void {
  }

}
