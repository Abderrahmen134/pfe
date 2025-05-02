import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() totalNotifications = 0;
  @Input() notifications = {
    dashboard: 0,
    produits: 0,
    clients: 0,
    admins: 0
  };
}
