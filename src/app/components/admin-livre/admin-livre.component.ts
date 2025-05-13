import { Component, OnInit } from '@angular/core';
import { DevisService, Devis } from 'src/app/services/devis.service';

@Component({
  selector: 'app-admin-livre',
  templateUrl: './admin-livre.component.html',
  styleUrls: ['./admin-livre.component.scss']
})
export class AdminLivreComponent implements OnInit {
  commandesLivrees: any[] = [];
selectedDevis: any = null;
showModal: boolean = false;
  constructor(private devisService: DevisService) {}

  ngOnInit(): void {
    this.getCommandesLivrees();
  }

  getCommandesLivrees(): void {
    this.devisService.commandeLivree().subscribe({
      next: (data) => {
        this.commandesLivrees = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des commandes livrées', err);
      }
    });
  }

  voirDetail(commande: any): void {
    // Afficher un modal ou naviguer vers une autre page avec les détails
    console.log('Voir détails de :', commande);
  }
}