import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './components/vehicule/vehicule.component';


const routes: Routes = [
  { path: 'vehicules', component: VehiculeComponent },
  { path: '', redirectTo: '/vehicules', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




 



