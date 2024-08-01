/*import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Ensure Router import
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

  constructor(private apiService: ApiService, private router: Router) { }

  login(): void {
    this.apiService.login(this.email, this.password).subscribe(
      response => {
        localStorage.setItem('access_token', response.access_token);
        console.log('Connexion réussie');

        // Navigate to home after successful login
        this.router.navigate(['/navigation']).then(() => {
          console.log('Navigation to home successful');
        }).catch(error => {
          console.error('Navigation error', error);
        });
      },
      error => {
        this.errorMessage = 'Erreur lors de la connexion';
        console.error('Erreur de connexion', error);
      }
    );
  }
}
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private apiService: ApiService, private router: Router) { }

  login(): void {
    this.apiService.login(this.email, this.password).subscribe(
      response => {
        localStorage.setItem('access_token', response.access);
        console.log('Connexion réussie');

        // Navigate to home after successful login
        this.router.navigate(['/navigation']).then(() => {
          console.log('Navigation to home successful');
        }).catch(error => {
          console.error('Navigation error', error);
        });
      },
      error => {
        this.errorMessage = 'Erreur lors de la connexion';
        console.error('Erreur de connexion', error);
      }
    );
  }
}
