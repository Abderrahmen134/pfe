import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevisService {
  private apiUrl = 'http://localhost:8000/api/devis'; // adapte l'URL si nécessaire

  constructor(private http: HttpClient) {}

  createDevis(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  createLigneDevis(payload: any) {
    return this.http.post('http://localhost:8000/api/ligne-devis', payload);
  }
  
}
