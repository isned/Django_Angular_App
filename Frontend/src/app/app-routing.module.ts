import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClientComponent } from './components/client/client.component';
import { VehiculeDetailsComponent } from './components/vehicule-details/vehicule-details.component';
import { VehiculeEditComponent } from './components/vehicule-edit/vehicule-edit.component';
import { VehiculeAddComponent } from './components/vehicule-add/vehicule-add.component';
import { ConducteurComponent } from './components/conducteur/conducteur.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'vehicules', component: VehiculeComponent },
  { path: '', component: LoginComponent }, 
  { path: 'home', component: HomeComponent }, 
  {path:'navigation' , component:NavigationComponent},
  { path: 'clients', component: ClientComponent },
  { path: 'vehicules/:id', component: VehiculeDetailsComponent },
  { path: 'vehicules/edit/:id', component: VehiculeEditComponent },
  { path: 'vehicules/add/add', component: VehiculeAddComponent },
  { path: 'conducteurs', component: ConducteurComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
