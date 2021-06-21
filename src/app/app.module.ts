import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerComponent } from './users/volunteer/volunteer.component';
import { AssociationComponent } from './users/association/association.component';
import { CampComponent } from './users/camp/camp.component';
import {HttpClientModule} from "@angular/common/http";
//import { VolunteerInscriptionComponent } from './users/volunteer-inscription/volunteer-inscription.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    VolunteerComponent,
    AssociationComponent,
    CampComponent//,
    //VolunteerInscriptionComponent
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
export class AppModule { }
