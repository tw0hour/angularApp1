import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VolunteerComponent} from "./users/volunteer/volunteer.component";
import {VolunteerInscriptionComponent} from "./users/volunteer-inscription/volunteer-inscription.component";

const routes: Routes = [
  {path : "volunteer", component : VolunteerComponent},
  {path : "inscription", component : VolunteerInscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
