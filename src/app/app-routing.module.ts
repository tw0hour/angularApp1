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
import {CampUpdateComponent} from "./camp-update/camp-update.component";
import {MedicamentUpdateComponent} from "./medicament-update/medicament-update.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {FoodUpdateComponent} from "./food-update/food-update.component";
//import {ClothUpdateComponent} from "./cloth-update/cloth-update.component";


const routes: Routes = [
  {path:"associations",component:AssociationComponent},
  {path:"camps",component: CampComponent},
  {path:"medicaments",component: MedicamentComponent},
  {path:"medicament/update",component: MedicamentUpdateComponent},
  {path:"foods",component: FoodComponent},
  {path:"food/update",component: FoodUpdateComponent},
  {path:"cloths",component: ClothComponent},
  //{path:"cloth/update",component: ClothUpdateComponent},
  {path : "volunteer", component : VolunteerComponent},
  {path : "volunteer/inscription", component : VolunteerInscriptionComponent},
  {path : "volunteer/connection", component : VolunteerConnectionComponent},
  {path: "association/inscription", component: AssociationsInscriptionComponent},
  {path: "association/connection", component: AssociationsConnectionComponent},
  {path: "camp/report", component: CampReportComponent},
  {path: "camp/update", component: CampUpdateComponent},
  {path: "donation/medicament", component: AddMedicamentComponent},
  {path: "donation/food", component: AddFoodComponent},
  {path: "statistics", component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
