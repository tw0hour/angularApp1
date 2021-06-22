import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationComponent } from "./users/association/association.component";
import {VolunteerComponent} from "./users/volunteer/volunteer.component";
import {VolunteerInscriptionComponent} from "./users/volunteer-inscription/volunteer-inscription.component";
import {VolunteerConnectionComponent} from "./users/volunteer-connection/volunteer-connection.component";
import {AssociationsInscriptionComponent} from "./users/associations-inscription/associations-inscription.component";
import {AssociationsConnectionComponent} from "./users/associations-connection/associations-connection.component";
import {CampReportComponent} from "./camp-report/camp-report.component";


const routes: Routes = [
  {path:"associations",component:AssociationComponent},
  {path : "volunteer", component : VolunteerComponent},
  {path : "inscription", component : VolunteerInscriptionComponent},
  {path : "connection", component : VolunteerConnectionComponent},
  {path: "association/inscription", component: AssociationsInscriptionComponent},
  {path: "association/connexion", component: AssociationsConnectionComponent},
  {path: "camp/report", component: CampReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
