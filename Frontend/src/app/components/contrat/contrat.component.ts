import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import Papa from 'papaparse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {
  contrats: any[] = [];
  filteredContrats: any[] = [];
  searchTerm: string = '';
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

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadContrats();
  }

  loadContrats(): void {
    this.apiService.getContrats().subscribe(
      (data) => {
        this.contrats = data;
        this.filteredContrats = data;
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
        this.filteredContrats = this.contrats;
        this.newContrat = {}; // Reset form
        this.successMessage = 'Contrat ajouté avec succès.';
      },
      (error) => {
        this.errorMessage = 'Erreur lors de l\'ajout du contrat.';
        console.error('Error adding contrat', error);
      }
    );
    this.router.navigate(['/contrats/add/add']);
  }

  editContrat(contrat: any): void {
    this.router.navigate(['/contrats/edit', contrat.id]);
  }

  deleteContrat(contrat: any): void {
    this.apiService.deleteContrat(contrat.id).subscribe(
      () => {
        this.contrats = this.contrats.filter(c => c.id !== contrat.id);
        this.filteredContrats = this.contrats;
        this.successMessage = 'Contrat supprimé avec succès.';
      },
      (error) => {
        this.errorMessage = 'Erreur lors de la suppression du contrat.';
        console.error('Error deleting contrat', error);
      }
    );
  }

  viewDetails(contrat: any): void {
    this.router.navigate(['/contrats/', contrat.id]);
  }

  searchContrats(): void {
    this.filteredContrats = this.contrats.filter(contrat =>
      contrat.numero.includes(this.searchTerm) ||
      contrat.client.nom.includes(this.searchTerm) ||
      contrat.client.prenom.includes(this.searchTerm)
    );
  }

  exportToCSV(): void {
    const csvData = Papa.unparse(this.filteredContrats);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contrats.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  printContracts(): void {
    const printContent = document.querySelector('table')?.outerHTML;
    if (printContent) {
      const printWindow = window.open('', '', 'width=800,height=600');
      if (printWindow) {
        printWindow.document.write('<html><head><title>Liste des Contrats</title>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      } else {
        this.errorMessage = 'Erreur lors de l\'ouverture de la fenêtre d\'impression.';
      }
    } else {
      this.errorMessage = 'Aucune table trouvée pour l\'impression.';
    }
  }
}