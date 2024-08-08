import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contrat-add',
  templateUrl: './contrat-add.component.html',
  styleUrls: ['./contrat-add.component.css']
})
export class ContratAddComponent implements OnInit {
  contratForm: FormGroup;
  clients: any[] = [];
  conducteurs: any[] = [];
  vehicules: any[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.contratForm = this.fb.group({
      numero: ['', Validators.required],
      client: ['', Validators.required],
      conducteur: ['', Validators.required],
      vehicule: ['', Validators.required],
      date_prise: ['', Validators.required],
      date_retour: [''],
      total_ttc: [0, Validators.required],
      reste: [0],
      etat: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadClients();
    this.loadConducteurs();
    this.loadVehicules();
  }

  loadClients(): void {
    this.apiService.getClients().subscribe(
      (data) => { this.clients = data; },
      (error) => { this.errorMessage = 'Erreur lors du chargement des clients.'; }
    );
  }

  loadConducteurs(): void {
    this.apiService.getConducteurs().subscribe(
      (data) => { this.conducteurs = data; },
      (error) => { this.errorMessage = 'Erreur lors du chargement des conducteurs.'; }
    );
  }

  loadVehicules(): void {
    this.apiService.getVehicules().subscribe(
      (data) => { this.vehicules = data; },
      (error) => { this.errorMessage = 'Erreur lors du chargement des véhicules.'; }
    );
  }

  onSubmit(): void {
    if (this.contratForm.valid) {
      this.apiService.addContrat(this.contratForm.value).subscribe(
        (data) => {
          this.successMessage = 'Contrat ajouté avec succès.';
          this.router.navigate(['/contrats']);
        },
        (error) => {
          this.errorMessage = 'Erreur lors de l\'ajout du contrat.';
        }
      );
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs requis.';
    }
  }
}
