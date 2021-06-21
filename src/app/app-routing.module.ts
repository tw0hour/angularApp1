import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationComponent } from "./users/association/association.component";

const routes: Routes = [
  {path:"associations",component:AssociationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
