import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HomeComponent } from './components/home/home.component';
import { AuthInterceptor } from './auth.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClientComponent } from './components/client/client.component';
import { VehiculeDetailsComponent } from './components/vehicule-details/vehicule-details.component';
import { VehiculeEditComponent } from './components/vehicule-edit/vehicule-edit.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { VehiculeAddComponent } from './components/vehicule-add/vehicule-add.component';
import { ConducteurComponent } from './components/conducteur/conducteur.component';
import { ContratComponent } from './components/contrat/contrat.component';
import { ContratAddComponent } from './components/contrat-add/contrat-add.component';
import { ContratEditComponent } from './components/contrat-edit/contrat-edit.component';
import { ContratDetailsComponent } from './components/contrat-details/contrat-details.component'; // Nécessaire pour les datepickers

@NgModule({
  declarations: [
    AppComponent,
    VehiculeComponent,
    HomeLayoutComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    ClientComponent,
    VehiculeDetailsComponent,
    VehiculeEditComponent,
    VehiculeAddComponent,
    ConducteurComponent,
    ContratComponent,
    ContratAddComponent,
    ContratEditComponent,
    ContratDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    MatIconModule,  // Add MatIconModule here
    MatButtonModule,  // Add MatButtonModule here if using Angular Material buttons
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
