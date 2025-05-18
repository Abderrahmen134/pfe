import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-powerbi-report',
  templateUrl: './powerbi-report.component.html',
  styleUrls: ['./powerbi-report.component.scss']
})
export class PowerbiReportComponent implements OnInit {

    
  constructor(private router: Router) { }

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
  }
get totalNotifications(): number {
    return this.notifications.devis + 
           this.notifications.confirmation +
           this.notifications.confirme +
           this.notifications.livraison +
           this.notifications.livre;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('admin'); // si tu stockes aussi l'admin/client
  
    this.router.navigate(['/']); // Redirige vers la page de connexion
  }
}
