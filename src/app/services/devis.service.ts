import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Devis {
  id: number;
  societe: string;
  id_client: number;
  status: string;
  created_at?: string;
  updated_at?: string;
}
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
  getAll(): Observable<Devis[]> {
    return this.http.get<Devis[]>(this.apiUrl);
  }

  // Met à jour le statut d’un devis
  updateStatus(id: number, status: string): Observable<Devis> {
    return this.http.put<Devis>(`${this.apiUrl}/${id}`, { status });
  }

  // Supprime un devis
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
 
  CommandesDemandees(): Observable<{ success: boolean, data: Devis[] }> {
    return this.http.get<{ success: boolean, data: Devis[] }>(`${this.apiUrl}/CommandesDemandees`);
  }
  
  commandeValidee(): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiUrl}/commandeValidee`);
  }
  
  
}
