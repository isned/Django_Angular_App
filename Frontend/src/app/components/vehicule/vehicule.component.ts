import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; 
@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  vehicules: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getVehicules().subscribe((data: any[]) => {
      this.vehicules = data;
    });
  }
}
