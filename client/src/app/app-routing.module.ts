import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PetComponent } from './pet/pet.component';


const routes: Routes = [
  {path: "", pathMatch : 'full', component: AllComponent},
  {path: "new", component: NewComponent},
  {path: "pet/:_id", component: PetComponent},
  {path: "edit/:_id", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
