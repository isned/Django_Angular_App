import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apiService: ApiService) { }

  login(): void {
    this.apiService.login(this.email, this.password).subscribe(
      response => {
        // Stocker le token dans le localStorage
        localStorage.setItem('access_token', response.access_token);
        // Rediriger ou afficher un message de succès
        console.log('Connexion réussie');
      },
      error => {
        this.errorMessage = 'Erreur lors de la connexion';
        console.error('Erreur de connexion', error);
      }
    );
  }
}
