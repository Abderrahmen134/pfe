import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LigneDevis {
  id: number;
  id_devis: number;
  id_product: number;
  quantite: number;
  remise: number;
  total_ht: number;
  tva: number;       // pourcentage, ex. 19.6
  total_ttc: number;
}

@Injectable({ providedIn: 'root' })
export class LigneDevisService {
  private apiUrl = 'http://localhost:8000/api/ligne-devis';

  constructor(private http: HttpClient) {}

  // récupère toutes les lignes pour un devis donné
  getByDevis(idDevis: number): Observable<LigneDevis[]> {
    const params = new HttpParams().set('devis_id', idDevis.toString());
    return this.http.get<LigneDevis[]>(this.apiUrl+'/devis/'+idDevis);
  }

  // enregistre la remise (et met à jour côté back si nécessaire)
  update(id: number, remise: number): Observable<LigneDevis> {
    return this.http.put<LigneDevis>(`${this.apiUrl}/${id}`, { remise });
  }
}
