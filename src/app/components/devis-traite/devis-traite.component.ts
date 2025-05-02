import { Component, OnInit } from '@angular/core';

interface ModeleProduit {
  nom: string;
  quantite: number;
  prix?: number;
}

interface Devis {
  id: number;
  client: string;
  date: string;
  statut: string;
  modeles: ModeleProduit[];
}

@Component({
  selector: 'app-devis-traite',
  templateUrl: './devis-traite.component.html',
  styleUrls: ['./devis-traite.component.scss']
})
export class DevisTraiteComponent implements OnInit {
  devisTraites: Devis[] = [];

  ngOnInit(): void {
    this.devisTraites = [
      {
        id: 201,
        client: 'Client Traité A',
        date: '2025-04-20',
        statut: 'Traité',
        modeles: [
          { nom: 'Canapé 3 places', quantite: 1, prix: 950 },
          { nom: 'Tapis Design', quantite: 2, prix: 150 }
        ]
      },
      {
        id: 202,
        client: 'Entreprise Traité B',
        date: '2025-04-25',
        statut: 'Traité',
        modeles: [
          { nom: 'Chaise Haute', quantite: 6 },
          { nom: 'Étagère Bois', quantite: 3, prix: 210 }
        ]
      }
    ];
  }
}
