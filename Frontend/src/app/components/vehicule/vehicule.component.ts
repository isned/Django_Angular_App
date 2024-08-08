import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  vehicules: any[] = [];
  filteredVehicules: any[] = [];
  errorMessage: string = '';
  displayedColumns: string[] = ['marque_nom', 'modele', 'immatriculation', 'couleur', 'annee', 'etat', 'carburant', 'date_immatriculation', 'kilometrage', 'categorie_nom', 'actions'];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getVehicules();
  }

  getVehicules(): void {
    this.apiService.getVehicules().subscribe(
      response => {
        this.vehicules = response;
        this.filteredVehicules = [...this.vehicules]; // Initialize filteredVehicules with a copy of vehicules
      },
      error => {
        this.errorMessage = 'Erreur lors de la récupération des véhicules';
        console.error('Erreur lors de la récupération des véhicules', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement; // Type assertion
    const filterValue = input.value.trim().toLowerCase(); // Get the input value and convert it to lowercase

    // Filter the vehicules based on the input value
    this.filteredVehicules = this.vehicules.filter(vehicule =>
      vehicule.immatriculation.toLowerCase().includes(filterValue)
    );
  }

  viewDetails(vehicule: any): void {
    this.router.navigate(['/vehicules', vehicule.id]);
  }

  editVehicule(vehicule: any): void {
    this.router.navigate(['/vehicules/edit', vehicule.id]);
  }

  deleteVehicule(vehicule: any): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      this.apiService.deleteVehicule(vehicule.id).subscribe(
        () => {
          this.getVehicules(); // Refresh the vehicle list after deletion
        },
        error => {
          this.errorMessage = 'Erreur lors de la suppression du véhicule';
          console.error('Erreur lors de la suppression du véhicule', error);
        }
      );
    }
  }

  addVehicule(): void {
    this.router.navigate(['/vehicules/add/add']);
  }

  isned(): void {
    this.router.navigate(['/register']);
  }
}
