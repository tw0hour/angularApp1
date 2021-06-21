import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationComponent } from "./users/association/association.component";
import {VolunteerComponent} from "./users/volunteer/volunteer.component";
//import {VolunteerInscriptionComponent} from "./users/volunteer-inscription/volunteer-inscription.component";


const routes: Routes = [
  {path:"associations",component:AssociationComponent},
  {path : "volunteer", component : VolunteerComponent},
  //{path : "inscription", component : VolunteerInscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
