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
import { MedicamentComponent } from './medicament/medicament.component';

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
    MedicamentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
