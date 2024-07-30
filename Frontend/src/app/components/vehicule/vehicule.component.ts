import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; // Ensure the path is correct

import { CardComponent, CardHeaderComponent, CardBodyComponent, RowComponent, ColComponent } from '@coreui/angular'; // Import CoreUI components

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
