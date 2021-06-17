import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerComponent } from './users/volunteer/volunteer.component';
import { AssociationComponent } from './users/association/association.component';
import { CampComponent } from './users/camp/camp.component';

@NgModule({
  declarations: [
    AppComponent,
    VolunteerComponent,
    AssociationComponent,
    CampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
