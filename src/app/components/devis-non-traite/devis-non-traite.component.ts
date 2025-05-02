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
  selector: 'app-devis-non-traite',
  templateUrl: './devis-non-traite.component.html',
  styleUrls: ['./devis-non-traite.component.scss']
})
export class DevisNonTraiteComponent implements OnInit {
  devisNonTraites: Devis[] = [];

  ngOnInit(): void {
    // Exemple de données simulées (à remplacer par API plus tard)
    this.devisNonTraites = [
      {
        id: 101,
        client: 'Ali Ben Salah',
        date: '2025-05-01',
        statut: 'Non traité',
        modeles: [
          { nom: 'Chaise Moderne', quantite: 4, prix: 120 },
          { nom: 'Table Ronde', quantite: 1, prix: 350 }
        ]
      },
      {
        id: 102,
        client: 'Société Delta',
        date: '2025-05-02',
        statut: 'Non traité',
        modeles: [
          { nom: 'Fauteuil Confort', quantite: 2 },
          { nom: 'Lampe Design', quantite: 3, prix: 80 }
        ]
      }
    ];
  }
}
