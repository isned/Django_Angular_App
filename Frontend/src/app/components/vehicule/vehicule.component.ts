// vehicule.component.ts
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
  errorMessage: string = '';
  displayedColumns: string[] = ['marque_nom', 'modele', 'immatriculation', 'couleur', 'annee', 'etat', 'carburant', 'date_immatriculation', 'kilometrage', 'categorie_nom', 'actions'];

  constructor(private apiService: ApiService, private router: Router) { }

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

  viewDetails(vehicule: any): void {
    this.router.navigate(['/vehicules', vehicule.id]);
  }

  editVehicule(vehicule: any): void {
    this.router.navigate(['/vehicules/edit', vehicule.id]);
  }

  deleteVehicule(vehicule: any): void {
    console.log('Véhicule à supprimer:', vehicule); // Affichez les détails du véhicule pour débogage

    if (confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      this.apiService.deleteVehicule(vehicule.id).subscribe(
        () => {
          console.log(`Véhicule avec ID ${vehicule.id} supprimé.`); // Confirmez la suppression
          this.getVehicules(); // Recharge la liste des véhicules
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
