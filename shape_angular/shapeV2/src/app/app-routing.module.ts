import { EditMuscleComponent } from './component/admin/muscle/edit-muscle/edit-muscle/edit-muscle.component';
import { ListMuscleComponent } from './component/admin/muscle/list-muscle/list-muscle/list-muscle.component';
import { AddMuscleComponent } from './component/admin/muscle/add-muscle/add-muscle/add-muscle.component';
import { MuscleComponent } from './component/admin/muscle/muscle/muscle/muscle.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "muscle",
    component: MuscleComponent
  },
  {
    path: "muscle/:muscle_id",
    component: ListMuscleComponent
  },
  {
    path: "addMuscle",
    component: AddMuscleComponent
  },

  {
    path: "editMuscle/:muscle_id",
    component: EditMuscleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
