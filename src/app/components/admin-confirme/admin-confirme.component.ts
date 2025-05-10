import { Component, OnInit } from '@angular/core';
import { DevisService, Devis } from 'src/app/services/devis.service';

@Component({
  selector: 'app-admin-confirme',
  templateUrl: './admin-confirme.component.html',
  styleUrls: ['./admin-confirme.component.scss']
})
export class AdminConfirmeComponent implements OnInit {
  commandesValidees: Devis[] = [];

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
}
