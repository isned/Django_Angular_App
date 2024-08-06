import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vehicule-edit',
  templateUrl: './vehicule-edit.component.html',
  styleUrls: ['./vehicule-edit.component.css']
})
export class VehiculeEditComponent implements OnInit {
  vehicule: any = {};
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getVehiculeDetails();
  }

  getVehiculeDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
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
    }
  }

  saveChanges(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.updateVehicule(id, this.vehicule).subscribe(
        () => {
          this.successMessage = 'Véhicule mis à jour avec succès!';
          setTimeout(() => this.router.navigate(['/vehicules']), 2000); // Redirige après 2 secondes
        },
        error => {
          this.errorMessage = 'Erreur lors de la mise à jour du véhicule';
          console.error('Erreur lors de la mise à jour du véhicule', error);
        }
      );
    }
  }

  onCancel(): void {
    this.router.navigate(['/vehicules']);
  }
}
