import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.css']
})
export class VehiculeDetailsComponent implements OnInit {
  vehicule: any = {}; // Assurez-vous que 'vehicule' est initialisé
  errorMessage: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVehiculeDetails();
  }

  getVehiculeDetails(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtenez l'ID depuis la route
    if (id) {
      this.apiService.getVehiculeById(id).subscribe(
        response => {
          this.vehicule = response;
        },
        error => {
          this.errorMessage = 'Erreur lors de la récupération des détails du véhicule';
          console.error('Erreur lors de la récupération des détails du véhicule', error);
        }
      );
    } else {
      this.errorMessage = 'ID du véhicule manquant';
    }
  }
}
