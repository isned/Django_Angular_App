// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';  // Base API URL

  constructor(private http: HttpClient) { }

  // Get vehicles with authorization
  getVehicules(): Observable<any[]> {
    const token = localStorage.getItem('access_token');  // Retrieve token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/vehicule/`, { headers });
  }

  // Login method
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}/token/`, body);
  }

  // Register method
  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register/`, userData);
  }
}
