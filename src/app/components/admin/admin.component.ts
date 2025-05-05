import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router) {}

  notifications = {
    devis: 2,
    confirmation: 1,
    confirme: 4,
    livraison: 3,
    livre: 0,
    dashboard: 0,
    produits: 5,
    clients: 2,
    admins: 1
  };

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