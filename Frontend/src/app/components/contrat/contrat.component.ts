import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
  contrats: any[] = [];
  displayedColumns: string[] = ['numero', 'client', 'conducteur', 'vehicule', 'date_prise', 'date_retour', 'total_ttc', 'reste', 'etat', 'actions'];

  newContrat: any = {
    numero: '',
    client: '',
    conducteur: '',
    vehicule: '',
    date_prise: '',
    date_retour: '',
    total_ttc: 0,
    reste: 0,
    etat: ''
  };

  errorMessage: string = ''; // Ajout de la propriété pour les messages d'erreur
  successMessage: string = ''; // Ajout de la propriété pour les messages de succès

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadContrats();
  }

  loadContrats(): void {
    this.apiService.getContrats().subscribe(
      (data) => {
        this.contrats = data;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des contrats.';
        console.error('Error loading contrats', error);
      }
    );
  }

  addContrat(): void {
    this.apiService.addContrat(this.newContrat).subscribe(
      (data) => {
        this.contrats.push(data);
        this.newContrat = {}; // Reset form
        this.successMessage = 'Contrat ajouté avec succès.';
      },
      (error) => {
        this.errorMessage = 'Erreur lors de l\'ajout du contrat.';
        console.error('Error adding contrat', error);
      }
    );
  }

  editContrat(contrat: any): void {
    // Implement edit functionality
  }

  deleteContrat(contrat: any): void {
    this.apiService.deleteContrat(contrat.id).subscribe(
      () => {
        this.contrats = this.contrats.filter(c => c.id !== contrat.id);
        this.successMessage = 'Contrat supprimé avec succès.';
      },
      (error) => {
        this.errorMessage = 'Erreur lors de la suppression du contrat.';
        console.error('Error deleting contrat', error);
      }
    );
  }

  viewDetails(contrat: any): void {
    // Implement view details functionality
  }
}
