import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-conducteur',
  templateUrl: './conducteur.component.html',
  styleUrls: ['./conducteur.component.css']
})
export class ConducteurComponent implements OnInit {
  conducteurs: any[] = [];
  displayedColumns: string[] = ['nom', 'prenom', 'email', 'telephone', 'actions'];

  newConducteur: any = {
    nom: '',
    prenom: '',
    email: '',
    telephone: ''
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadConducteurs();
  }

  loadConducteurs(): void {
    this.apiService.getConducteurs().subscribe(
      (data) => {
        this.conducteurs = data;
      },
      (error) => {
        console.error('Error loading conducteurs', error);
      }
    );
  }

  addConducteur(): void {
    this.apiService.addConducteur(this.newConducteur).subscribe(
      (data) => {
        this.conducteurs.push(data);
        this.newConducteur = {}; // Reset form
      },
      (error) => {
        console.error('Error adding conducteur', error);
      }
    );
  }

  editConducteur(conducteur: any): void {
    // Implement edit functionality
  }

  deleteConducteur(conducteur: any): void {
    this.apiService.deleteConducteur(conducteur.id).subscribe(
      () => {
        this.conducteurs = this.conducteurs.filter(c => c.id !== conducteur.id);
      },
      (error) => {
        console.error('Error deleting conducteur', error);
      }
    );
  }

  viewDetails(conducteur: any): void {
    // Implement view details functionality
  }
}
