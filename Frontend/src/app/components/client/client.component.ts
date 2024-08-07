import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: any[] = [];
  displayedColumns: string[] = [
    'nom', 'prenom', 'gender', 'adresse', 'telephone', 'email', 'date_naissance', 
    'lieu_naissance', 'nationality', 'cin', 'est_conducteur', 'actions'
  ];

  newClient: any = {
    nom: '',
    prenom: '',
    gender: '',
    adresse: '',
    telephone: '',
    email: '',
    date_naissance: '',
    lieu_naissance: '',
    nationality: '',
    cin: '',
    est_conducteur: false
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.apiService.getClients().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Error loading clients', error);
      }
    );
  }

  addClient(): void {
    this.apiService.addClient(this.newClient).subscribe(
      (data) => {
        this.clients.push(data);
        this.newClient = {}; // Reset form
      },
      (error) => {
        console.error('Error adding client', error);
      }
    );
  }

  editClient(client: any): void {
    // Implement edit functionality
  }

  deleteClient(client: any): void {
    this.apiService.deleteClient(client.id).subscribe(
      () => {
        this.clients = this.clients.filter(c => c.id !== client.id);
      },
      (error) => {
        console.error('Error deleting client', error);
      }
    );
  }

  viewDetails(client: any): void {
    // Implement view details functionality
  }
}
