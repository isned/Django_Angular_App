// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) { }

  
  getVehicules(): Observable<any[]> {
    const token = localStorage.getItem('access_token');  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/vehicule/`, { headers });
  }
// Login method
login(email: string, password: string): Observable<any> {
  const body = { email, password };
  return this.http.post<any>(`${this.apiUrl}/auth/login/`, body);
}

  // Register method
 // register(userData: any): Observable<any> {
   // return this.http.post<any>(`${this.apiUrl}/auth/register/`, userData);
  //}
  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register/`, userData);
  }
}
