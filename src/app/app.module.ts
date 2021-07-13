import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerComponent } from './users/volunteer/volunteer.component';
import { AssociationComponent } from './users/association/association.component';
import { CampComponent } from './camp/camp.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AssociationsInscriptionComponent } from './users/associations-inscription/associations-inscription.component';
import { AssociationsConnectionComponent } from './users/associations-connection/associations-connection.component';
import { CampReportComponent } from './camp-report/camp-report.component';
import {VolunteerInscriptionComponent} from "./users/volunteer-inscription/volunteer-inscription.component";
import {VolunteerConnectionComponent} from "./users/volunteer-connection/volunteer-connection.component";
import { MedicamentAddComponent } from './medicament-add/medicament-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodAddComponent } from './food-add/food-add.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { FoodComponent } from './food/food.component';
import { ClothComponent } from './cloth/cloth.component';
import { CampUpdateComponent } from './camp-update/camp-update.component';
import { MedicamentUpdateComponent } from './medicament-update/medicament-update.component';
import { FoodUpdateComponent } from './food-update/food-update.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CommonModule } from "@angular/common";
import { ClothUpdateComponent } from './cloth-update/cloth-update.component';
import { DeliveryComponent } from './delivery/delivery/delivery.component';
import { DeliversDeliveryComponent } from './delivery/delivers/delivers-delivery/delivers-delivery.component';
import { DeliveredDeliveryComponent } from './delivery/delivered/delivered-delivery/delivered-delivery.component';


@NgModule({
  declarations: [
    AppComponent,
    VolunteerComponent,
    AssociationComponent,
    CampComponent,
    VolunteerInscriptionComponent,
    VolunteerConnectionComponent,
    CampComponent,
    AssociationsInscriptionComponent,
    AssociationsConnectionComponent,
    CampReportComponent,
    MedicamentAddComponent,
    FoodAddComponent,
    MedicamentComponent,
    FoodComponent,
    ClothComponent,
    CampUpdateComponent,
    MedicamentUpdateComponent,
    FoodUpdateComponent,
    StatisticsComponent,
    ClothUpdateComponent,
    DeliveryComponent,
    DeliversDeliveryComponent,
    DeliveredDeliveryComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
