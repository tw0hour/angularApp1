import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {

  @Input() association: { id: number; name: string; mail: string; password: string; money: number;} | undefined;

  ngOnInit(): void {
  }

}
