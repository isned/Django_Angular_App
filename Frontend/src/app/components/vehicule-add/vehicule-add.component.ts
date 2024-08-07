// vehicule-add.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vehicule-add',
  templateUrl: './vehicule-add.component.html',
  styleUrls: ['./vehicule-add.component.css']
})
export class VehiculeAddComponent implements OnInit {
  vehiculeForm: FormGroup;
  successMessage: string | null = null;
  marques: any[] = [];
  categories: any[] = [];

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.vehiculeForm = this.fb.group({
      marque: ['', Validators.required],
      modele: ['', Validators.required],
      immatriculation: ['', Validators.required],
      couleur: ['', Validators.required],
      annee: ['', Validators.required],
      etat: ['', Validators.required],
      carburant: ['', Validators.required],
      date_immatriculation: ['', Validators.required],
      kilometrage: ['', Validators.required],
      categorie: ['', Validators.required] // Ajout de la catégorie
    });
  }

  ngOnInit(): void {
    this.getMarques();
    this.getCategories();
  }

  getMarques(): void {
    this.apiService.getMarques().subscribe(
      response => {
        this.marques = response;
      },
      error => {
        console.error('Erreur lors de la récupération des marques', error);
      }
    );
  }

  getCategories(): void {
    this.apiService.getCategories().subscribe(
      response => {
        this.categories = response;
      },
      error => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    );
  }

  onSubmit() {
    if (this.vehiculeForm.valid) {
      this.apiService.addVehicule(this.vehiculeForm.value).subscribe(
        response => {
          this.successMessage = 'Véhicule ajouté avec succès !';
          this.vehiculeForm.reset();
        },
        error => {
          console.error('Erreur lors de l\'ajout du véhicule', error);
        }
      );
    }
  }
}
