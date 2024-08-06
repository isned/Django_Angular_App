// api.service.ts
/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}/auth/login/`, body).pipe(
      tap(response => {
        if (response && response.access) {
          console.log('Login response:', response); // Debugging log
          localStorage.setItem('access_token', response.access);
          console.log('Token stored in local storage:', response.access); // Debugging log
        } else {
          console.log('Login response does not contain access token'); // Debugging log
        }
      })
    );
  }

  getVehicules(): Observable<any[]> {
    const token = localStorage.getItem('access_token');
    console.log('Token from localStorage:', token); // Debugging log

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/vehicule/`, { headers });
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register/`, userData);
  }
}
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}/auth/login/`, body).pipe(
      tap(response => {
        if (response && response.access) {
          console.log('Login response:', response);
          localStorage.setItem('access_token', response.access);
          console.log('Token stored in local storage:', response.access);
        } else {
          console.log('Login response does not contain access token');
        }
      })
    );
  }

  getVehicules(): Observable<any[]> {
    const token = localStorage.getItem('access_token');
    console.log('Token from localStorage:', token);

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/vehicule/`, { headers });
  }
  getVehiculeById(id: string): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/vehicule/${id}/`, { headers });
  }
  updateVehicule(id: string, vehicule: any): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(`${this.apiUrl}/vehicule/${id}/`, vehicule, { headers });
  }
  deleteVehicule(id: number): Observable<void> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.apiUrl}/vehicule/${id}/`, { headers });
  }
  
  addVehicule(vehicule: any): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiUrl}/vehicule/`, vehicule, { headers });
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register/`, userData);
  }
}
