import { Component, OnInit } from '@angular/core';
import { DevisService, Devis } from 'src/app/services/devis.service';
import { HttpClient } from '@angular/common/http';
import { LigneDevis } from 'src/app/models/model';

@Component({
  selector: 'app-admin-confirme',
  templateUrl: './admin-confirme.component.html',
  styleUrls: ['./admin-confirme.component.scss']
})
export class AdminConfirmeComponent implements OnInit {
  commandesValidees: Devis[] = [];
  selectedDevis: any = null;
  showModal: boolean = false;

  constructor(private devisService: DevisService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCommandesValidees();
  }

  loadCommandesValidees(): void {
    this.devisService.commandeValidee().subscribe({
      next: (data: any) => {
        this.commandesValidees = data.data;
      },
      error: (err: any) => {
        console.error('Erreur chargement commandes validées', err);
      }
    });
  }

  voirDetail(devis: Devis): void {
    this.selectedDevis = devis;
    this.showModal = true;

    this.http.get<LigneDevis[]>(`http://localhost:8000/api/ligne-devis/devis/${devis.id}`).subscribe({
      next: (data) => {
        this.selectedDevis.lignes = data;
      },
      error: (err) => {
        console.error('Erreur chargement des lignes du devis', err);
      }
    });
  }

  marquerCommeLivre(devis: Devis): void {
    if (confirm('Confirmer que cette commande est livrée ?')) {
      this.devisService.updateStatus(devis.id, 'commande_livree').subscribe({
        next: () => {
          this.loadCommandesValidees(); // Rafraîchir la liste
        },
        error: (err) => {
          console.error('Erreur lors du changement de statut', err);
        }
      });
    }
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
