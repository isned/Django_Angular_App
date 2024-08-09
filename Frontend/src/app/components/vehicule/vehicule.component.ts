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
  successMessage: string = '';
  displayedColumns: string[] = ['marque_nom', 'modele', 'immatriculation', 'couleur', 'annee', 'etat', 'carburant', 'date_immatriculation', 'kilometrage', 'categorie_nom', 'actions'];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getVehicules();
  }

  getVehicules(): void {
    this.apiService.getVehicules().subscribe(
      response => {
        this.vehicules = response;
        this.filteredVehicules = [...this.vehicules];
      },
      error => {
        this.errorMessage = 'Erreur lors de la récupération des véhicules';
        console.error('Erreur lors de la récupération des véhicules', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filterValue = input.value.trim().toLowerCase();

    this.filteredVehicules = this.vehicules.filter(vehicule =>
      vehicule.immatriculation.toLowerCase().includes(filterValue)
    );
  }

  viewDetails(vehicule: any): void {
    this.router.navigate(['/vehicules', vehicule.id]);
  }

  editVehicule(vehicule: any): void {
    const newState = prompt('Entrez le nouvel état du véhicule (disponible, en_reparation, loue)', vehicule.etat);
    if (newState && ['disponible', 'en_reparation', 'loue'].includes(newState)) {
      const updatedVehicule = { ...vehicule, etat: newState };
      this.apiService.updateVehicule(vehicule.id, updatedVehicule).subscribe(
        () => {
          this.getVehicules();
          this.successMessage = `Véhicule mis à jour avec succès.`;
        },
        (error) => {
          this.errorMessage = `Erreur lors de la mise à jour du véhicule.`;
          console.error('Error updating vehicule', error);
        }
      );
    } else {
      this.errorMessage = 'État invalide.';
    }
  }

  markAsUnderRepair(vehicule: any): void {
    const updatedVehicule = { ...vehicule, etat: 'en_reparation' };
    this.apiService.updateVehicule(vehicule.id, updatedVehicule).subscribe(
      () => {
        this.getVehicules();
        this.successMessage = `Véhicule marqué comme en réparation.`;
      },
      (error) => {
        this.errorMessage = `Erreur lors de la mise à jour du véhicule.`;
        console.error('Error updating vehicule', error);
      }
    );
  }

  deleteVehicule(vehicule: any): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      this.apiService.deleteVehicule(vehicule.id).subscribe(
        () => {
          this.getVehicules();
          this.successMessage = 'Véhicule supprimé avec succès.';
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

}
