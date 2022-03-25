import { NgModule } from '@angular/core';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  {path:'', redirectTo:'cars', pathMatch:'full'},
  {path:'cars',  component:CarListComponent},
  {path:'car/:id', component:CarDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
