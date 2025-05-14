import { Component, OnInit } from '@angular/core';
import { DevisService, Devis } from 'src/app/services/devis.service';
import { HttpClient } from '@angular/common/http';
import { LigneDevis } from 'src/app/models/model';

@Component({
  selector: 'app-admin-livre',
  templateUrl: './admin-livre.component.html',
  styleUrls: ['./admin-livre.component.scss']
})
export class AdminLivreComponent implements OnInit {
  commandesLivrees: Devis[] = [];
  selectedDevis: any = null;
  showModal: boolean = false;

  constructor(private devisService: DevisService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getCommandesLivrees();
  }

  getCommandesLivrees(): void {
    this.devisService.commandeLivree().subscribe({
      next: (res) => {
        this.commandesLivrees = res.data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des commandes livrées', err);
      }
    });
  }

  openModal(devis: Devis): void {
    this.selectedDevis = devis;
    this.showModal = true;

    this.http.get<LigneDevis[]>(`http://localhost:8000/api/ligne-devis/devis/${devis.id}`).subscribe({
      next: (data) => {
        this.selectedDevis.lignes = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des lignes de devis', err);
      }
    });
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedDevis = null;
  }

  calcTotaux(ligne: LigneDevis): { total_ht_net: number, total_ttc: number } {
    const prixUnitaire = ligne.product?.price || 0;
    const quantite = ligne.quantite || 0;
    const remise = ligne.remise || 0;
    const tva = ligne.tva || 0;

    const totalHT = prixUnitaire * quantite;
    const totalHTNet = totalHT - (totalHT * remise / 100);
    const totalTTC = totalHTNet + (totalHTNet * tva / 100);

    return {
      total_ht_net: totalHTNet,
      total_ttc: totalTTC
    };
  }
}
