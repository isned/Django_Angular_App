/*import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css'],
})
export class VehiculeComponent implements OnInit {
  vehicules: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getVehicules();
  }

  getVehicules(): void {
    this.apiService.getVehicules().subscribe({
      next: (data: any[]) => {
        this.vehicules = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des véhicules', err);
      }
    });
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  vehicules: any[] = [];
  errorMessage: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getVehicules();
  }

  getVehicules(): void {
    this.apiService.getVehicules().subscribe(
      response => {
        this.vehicules = response;
      },
      error => {
        this.errorMessage = 'Erreur lors de la récupération des véhicules';
        console.error('Erreur lors de la récupération des véhicules', error);
      }
    );
  }
}
