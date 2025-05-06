import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private devisService: DevisService) {}

  notifications = {
    devis: 0,
    confirmation: 0,
    confirme: 0,
    livraison: 0,
    livre: 0,
    dashboard: 0,
    produits: 0,
    clients: 0,
    admins: 0
  };

  ngOnInit(): void {
    this.loadDevisCount();
  }

  loadDevisCount(): void {
    this.devisService.getAll().subscribe({
      next: data => {
        this.notifications.devis = data.length; // ← mise à jour dynamique du nombre de devis
      },
      error: () => {
        console.error('Erreur lors du chargement des devis');
      }
    });
  }

  get totalNotifications(): number {
    return this.notifications.devis + 
           this.notifications.confirmation +
           this.notifications.confirme +
           this.notifications.livraison +
           this.notifications.livre;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
