import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VolunteerComponent} from "./users/volunteer/volunteer.component";
import {VolunteerInscriptionComponent} from "./users/volunteer-inscription/volunteer-inscription.component";
import {VolunteerConnectionComponent} from "./users/volunteer-connection/volunteer-connection.component";

const routes: Routes = [
  {path : "volunteer", component : VolunteerComponent},
  {path : "inscription", component : VolunteerInscriptionComponent},
  {path : "connection", component : VolunteerConnectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
