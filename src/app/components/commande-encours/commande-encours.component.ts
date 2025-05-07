import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande-encours',
  templateUrl: './commande-encours.component.html',
  styleUrls: ['./commande-encours.component.scss']
})
export class CommandeEncoursComponent implements OnInit {

  commandes: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const stored = localStorage.getItem('commandesEncours');
  this.commandes = stored ? JSON.parse(stored) : [];
  }

}
