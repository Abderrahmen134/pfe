import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAll().subscribe(res => {
      this.users = res;
    });
    
  }
  changerStatut(id: number, statut: string) {
  this.http.patch(`http://localhost:8000/api/clients/${id}/statut`, { statut }).subscribe({
    next: () => this.loadUsers(),
    error: err => console.error(err)
  });
}

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
}
