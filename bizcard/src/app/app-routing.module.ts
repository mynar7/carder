import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardInfoFormComponent } from './card-info-form/card-info-form.component';

const routes: Routes = [
  { path: '', component: CardInfoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
