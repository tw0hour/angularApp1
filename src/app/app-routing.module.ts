import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationComponent } from "./users/association/association.component";
import {VolunteerComponent} from "./users/volunteer/volunteer.component";
import {AssociationsInscriptionComponent} from "./users/associations-inscription/associations-inscription.component";
import {AssociationsConnectionComponent} from "./users/associations-connection/associations-connection.component";
import {CampReportComponent} from "./camp-report/camp-report.component";
import {VolunteerInscriptionComponent} from "./users/volunteer-inscription/volunteer-inscription.component";
import {VolunteerConnectionComponent} from "./users/volunteer-connection/volunteer-connection.component";
import {AddMedicamentComponent} from "./add-medicament/add-medicament.component";
import {AddFoodComponent} from "./add-food/add-food.component";
import {CampComponent} from "./camp/camp.component";
import {MedicamentComponent} from "./medicament/medicament.component";
import {FoodComponent} from "./food/food.component";
import {ClothComponent} from "./cloth/cloth.component";


const routes: Routes = [
  {path:"associations",component:AssociationComponent},
  {path:"camps",component: CampComponent},
  {path:"medicaments",component: MedicamentComponent},
  {path:"foods",component: FoodComponent},
  {path:"cloths",component: ClothComponent},
  {path : "volunteer", component : VolunteerComponent},
  {path : "volunteer/inscription", component : VolunteerInscriptionComponent},
  {path : "volunteer/connection", component : VolunteerConnectionComponent},
  {path: "association/inscription", component: AssociationsInscriptionComponent},
  {path: "association/connection", component: AssociationsConnectionComponent},
  {path: "camp/report", component: CampReportComponent},
  {path: "donation/medicament", component: AddMedicamentComponent},
  {path: "donation/food", component: AddFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
