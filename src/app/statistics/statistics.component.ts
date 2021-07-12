import {Component, OnInit} from '@angular/core';
import {StatisticsServices} from "../services/statistics.services";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit {
  nbDonation: number | undefined;
  totalDonation: number | undefined;
  maxDonation: number | undefined;
  needsName: string | undefined;
  needsQuantity: number | undefined;

  constructor(private statisticsServices: StatisticsServices, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    const assocId = this.cookieService.get('associationId');
    if(assocId === undefined){
      console.log("Id association Manquant");
      return;
    }

    this.statisticsServices.nbDonation(parseInt(assocId)).subscribe(res => {
      console.log(res);
      this.nbDonation = res;
    });

    this.statisticsServices.totalDonation(parseInt(assocId)).subscribe(res => {
      console.log(res);
      this.totalDonation = res;
    });

    this.statisticsServices.maxDonation(parseInt(assocId)).subscribe(res => {
      console.log(res);
      this.maxDonation = res;
    });

    this.statisticsServices.needs(parseInt(assocId)).subscribe(res => {
      res?.forEach((value) => {
        this.needsName = value.name;
        this.needsQuantity = value.quantity;
      });

    });

  }

}
