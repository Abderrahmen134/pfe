import { Component, OnInit } from '@angular/core';
import { DevisService, Devis } from 'src/app/services/devis.service';

@Component({
  selector: 'app-admin-confirme',
  templateUrl: './admin-confirme.component.html',
  styleUrls: ['./admin-confirme.component.scss']
})
export class AdminConfirmeComponent implements OnInit {
  commandesValidees: Devis[] = [];
  selectedDevis: any = null;
showModal: boolean = false;

  constructor(private devisService: DevisService) {}

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
  alert(`Détails du devis ID ${devis.id}\nClient: ${devis.societe}\nStatus: ${devis.status}`);
  // Tu peux ouvrir un modal ou rediriger vers une page de détail si tu veux
}

marquerCommeLivre(devis: Devis): void {
  if (confirm('Confirmer que cette commande est livrée ?')) {
    this.devisService.updateStatus(devis.id, 'commande_livree').subscribe({
      next: () => {
        this.loadCommandesValidees(); // Rafraîchit la liste
      },
      error: (err) => {
        console.error('Erreur lors du changement de statut', err);
      }
    });
  }
}

}
