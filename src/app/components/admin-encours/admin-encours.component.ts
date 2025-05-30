import { Component, OnInit } from '@angular/core';
import { LigneDevis } from 'src/app/models/model';
import { Devis, DevisService } from 'src/app/services/devis.service';
import { LigneDevisService } from 'src/app/services/ligne-devis.service';


@Component({
  selector: 'app-admin-encours',
  templateUrl: './admin-encours.component.html',
  styleUrls: ['./admin-encours.component.scss']
})
export class AdminEncoursComponent implements OnInit {
  devisList: Devis[] = [];
  selectedDevis: Devis | null = null;
  lignes: LigneDevis[] = [];
  statuses = ['untraited', 'accepted', 'rejected'];
  message = { text: '', type: '' as 'success' | 'error' | '' };
  
  constructor(
    private devisService: DevisService,
    private ligneService: LigneDevisService
  ) {}

  ngOnInit(): void {
    this.loadDevis();
    console.log('Devis List:', this.devisList);
    
  }
  enregistrerModifications() {
    console.log('Modifications enregistrées');
    // Tu peux ajouter ici l'appel à un service pour sauvegarder les données
  }
  
  loadDevis() {
  this.devisService.getAll().subscribe({
    next: data => {
      // filtrer ici sur le statut "commande_demandee"
      this.devisList = data.filter(d => d.status === 'commande_demandee');
    },
    error: () => this.showMessage('Erreur chargement devis', 'error')
  });
}

  
  onSelectDevis(d: Devis) {
    this.selectedDevis = d;
    this.ligneService.getByDevis(d.id).subscribe({
      next: data => this.lignes = data,
      error: () => this.showMessage('Erreur chargement lignes', 'error')
    });
  }

  calcTotaux(l: LigneDevis) {
    const htNet = l.total_ht * (1 - l.remise / 100);
    const ttc = htNet * (1 + l.tva / 100);
    return { total_ht_net: htNet, total_ttc: ttc };
  }

  onRemiseChange(l: LigneDevis) {
    this.ligneService.update(l.id, l.remise).subscribe({
      next: updated => {
        Object.assign(l, updated);
        this.showMessage(`Remise ligne #${l.id} mise à jour`, 'success');
      },
      error: () => this.showMessage('Erreur mise à jour remise', 'error')
    });
  }

  onChangeStatus(devis: Devis, newStatus: string) {
    this.devisService.updateStatus(devis.id, newStatus).subscribe({
      next: updated => {
        devis.status = updated.status;
        this.showMessage(`Statut du devis #${devis.id} mis à jour`, 'success');
      },
      error: () => this.showMessage('Erreur mise à jour statut', 'error')
    });
  }

  confirmDelete(devis: Devis) {
    if (window.confirm(`Supprimer le devis #${devis.id} ?`)) {
      this.devisService.delete(devis.id).subscribe({
        next: () => {
          this.devisList = this.devisList.filter(d => d.id !== devis.id);
          this.showMessage(`Devis #${devis.id} supprimé`, 'success');
        },
        error: () => this.showMessage('Erreur suppression devis', 'error')
      });
    }
  }

  private showMessage(text: string, type: 'success' | 'error') {
    this.message = { text, type };
    setTimeout(() => this.message = { text: '', type: '' }, 3000);
  }
  


}