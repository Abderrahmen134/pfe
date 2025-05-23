import { Component, OnInit } from '@angular/core';
import { Devis, DevisService } from '../../services/devis.service';
import { LigneDevis, LigneDevisService } from '../../services/ligne-devis.service';

@Component({
  selector: 'app-admin-devis',
  templateUrl: './admin-devis.component.html',
  styleUrls: ['./admin-devis.component.scss']
})
export class AdminDevisComponent implements OnInit {
  devisList: Devis[] = [];
  selectedDevis: Devis | null = null;
  lignes: LigneDevis[] = [];
  statuses = ['non-traité', 'accepté', 'rejeté'];
  message = { text: '', type: '' as 'success' | 'error' | '' };
  ligneParDevis: { [key: number]: LigneDevis[] } = {};

  
  constructor(
    private devisService: DevisService,
    private ligneService: LigneDevisService
  ) {}

  ngOnInit(): void {
    this.loadDevis();
    
    
  }
  enregistrerModifications() {
    console.log('Modifications enregistrées');
    // Tu peux ajouter ici l'appel à un service pour sauvegarder les données
  }
  
  loadDevis() {
  this.devisService.getAll().subscribe({
    next: data => {
      this.devisList = data;

      // Pour chaque devis, on charge ses lignes
      for (let d of data) {
        this.ligneService.getByDevis(d.id).subscribe({
          next: lignes => {
            this.ligneParDevis[d.id] = lignes;
          },
          error: () => this.showMessage(`Erreur chargement lignes devis #${d.id}`, 'error')
        });
      }
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
  getTotalTTC(devisId: number): number {
  const lignes = this.ligneParDevis[devisId] || [];
  let total = 0;
  for (let l of lignes) {
    const htNet = l.total_ht * (1 - (l.remise || 0) / 100);
    const ttc = htNet * (1 + (l.tva || 0) / 100);
    total += ttc;
  }
  return total;
}


  
}