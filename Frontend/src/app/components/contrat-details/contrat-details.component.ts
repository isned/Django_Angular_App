import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contrat-details',
  templateUrl: './contrat-details.component.html',
  styleUrls: ['./contrat-details.component.css']
})
export class ContratDetailsComponent implements OnInit {
  contrat: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Convert id to number
    if (!isNaN(id)) {
      this.apiService.getContratById(id).subscribe(
        (data) => {
          this.contrat = data;
        },
        (error) => {
          this.errorMessage = 'Erreur lors du chargement du contrat.';
          console.error('Error loading contrat details', error);
        }
      );
    } else {
      this.errorMessage = 'ID de contrat invalide.';
    }
  }
}
