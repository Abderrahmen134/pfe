import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LigneDevis } from 'src/app/models/model';

@Component({
  selector: 'app-client-devis',
  templateUrl: './client-devis.component.html',
  styleUrls: ['./client-devis.component.scss']
})
export class ClientDevisComponent implements OnInit {
  devisList: any[] = [];
  selectedDevis: any = null;
  showModal: boolean = false;
  clientId: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const clientData = JSON.parse(localStorage.getItem('client') || '{}');
    this.clientId = clientData.id;
    this.loadDevis();
  }

  loadDevis() {
    this.http.get<any[]>(`http://localhost:8000/api/devis/client/${this.clientId}`).subscribe(
      data => this.devisList = data,
      error => console.error('Erreur chargement devis', error)
    );
  }
 calcTotaux(l: LigneDevis) {
    const htNet = l.total_ht * (1 - l.remise / 100);
    const ttc = htNet * (1 + l.tva / 100);
    return { total_ht_net: htNet, total_ttc: ttc };
  }
  openModal(devis: any) {
    this.selectedDevis = devis;
    this.showModal = true;
    this.http.get<any[]>(`http://localhost:8000/api/ligne-devis/devis/${devis.id}`).subscribe(data => {
      this.selectedDevis.lignes = data;
    });
  }

  closeModal() {
    this.showModal = false;
  }
  // Fonction pour appeler l'API de commande
  commander(devis: any) {
    const url = `http://localhost:8000/api/devis/${devis.id}/demander-commande`;

    this.http.put(url, { 
      // ici tu peux envoyer des données supplémentaires si nécessaire
    }).subscribe(
      (response) => {
        console.log('Commande demandée avec succès', response);
        // Effectuer toute autre action après la commande, comme fermer le modal ou afficher un message de confirmation.
        this.closeModal();
        this.loadDevis();
      },
      (error) => {
        console.error('Erreur lors de la demande de commande', error);
        // Gérer les erreurs d'API (par exemple, afficher un message d'erreur)
      }
    );
  }
}


