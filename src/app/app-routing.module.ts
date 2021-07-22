import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationComponent } from "./users/association/association.component";
import {VolunteerComponent} from "./users/volunteer/volunteer.component";
import {AssociationsInscriptionComponent} from "./users/associations-inscription/associations-inscription.component";
import {AssociationsConnectionComponent} from "./users/associations-connection/associations-connection.component";
import {CampReportComponent} from "./camp-report/camp-report.component";
import {VolunteerInscriptionComponent} from "./users/volunteer-inscription/volunteer-inscription.component";
import {VolunteerConnectionComponent} from "./users/volunteer-connection/volunteer-connection.component";
import {MedicamentAddComponent} from "./medicament-add/medicament-add.component";
import {FoodAddComponent} from "./food-add/food-add.component";
import {CampComponent} from "./camp/camp.component";
import {MedicamentComponent} from "./medicament/medicament.component";
import {FoodComponent} from "./food/food.component";
import {ClothComponent} from "./cloth/cloth.component";
import {CampUpdateComponent} from "./camp-update/camp-update.component";
import {MedicamentUpdateComponent} from "./medicament-update/medicament-update.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {FoodUpdateComponent} from "./food-update/food-update.component";
import {ClothUpdateComponent} from "./cloth-update/cloth-update.component";
import {DeliveryComponent} from "./delivery/delivery/delivery.component";
import {DeliveredDeliveryComponent} from "./delivery/delivered/delivered-delivery/delivered-delivery.component";
import {DeliversDeliveryComponent} from "./delivery/delivers/delivers-delivery/delivers-delivery.component";
import {DeliveryInComponent} from "./delivery/delivery-in/delivery-in.component";
import {ClothAddComponent} from "./cloth-add/cloth-add.component";


const routes: Routes = [
  {path: "associations",component:AssociationComponent},
  {path: "association/inscription", component: AssociationsInscriptionComponent},
  {path: "association/connection", component: AssociationsConnectionComponent},

  {path: "camps",component: CampComponent},
  {path: "camp/report", component: CampReportComponent},
  {path: "camp/update", component: CampUpdateComponent},

  {path: "cloths",component: ClothComponent},
  {path: "cloth/add",component: ClothAddComponent},
  {path: "cloth/update",component: ClothUpdateComponent},

  {path: "foods",component: FoodComponent},
  {path: "food/add", component: FoodAddComponent},
  {path: "food/update",component: FoodUpdateComponent},

  {path: "medicaments",component: MedicamentComponent},
  {path: "medicament/add", component: MedicamentAddComponent},
  {path: "medicament/update",component: MedicamentUpdateComponent},

  {path: "volunteer", component : VolunteerComponent},
  {path: "volunteer/inscription", component : VolunteerInscriptionComponent},
  {path: "volunteer/connection", component : VolunteerConnectionComponent},

  {path: "statistics", component: StatisticsComponent},

  {path: "delivery", component: DeliveryComponent},
  {path: "delivery/delivered", component: DeliveredDeliveryComponent},
  {path: "delivery/delivery", component: DeliversDeliveryComponent},
  {path: "deliveryIn", component: DeliveryInComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
