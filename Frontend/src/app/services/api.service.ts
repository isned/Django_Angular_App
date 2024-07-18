import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000';  // Remplacez par l'URL de votre API Django

  constructor(private http: HttpClient) { }

  getVehicules(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vehicule/`);
  }

  getVehicule(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/vehicule/${id}/`);
  }

  createVehicule(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/vehicule/`, data);
  }

  updateVehicule(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/vehicule/${id}/`, data);
  }

  deleteVehicule(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/vehicule/${id}/`);
  }

  
}
