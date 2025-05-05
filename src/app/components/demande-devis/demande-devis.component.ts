import { Component, OnInit } from '@angular/core';
import { ClientData, Product } from 'src/app/models/model';
import { ProductStorageService } from 'src/app/services/product-storage.service';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-demande-devis',
  templateUrl: './demande-devis.component.html',
  styleUrls: ['./demande-devis.component.scss']
})
export class DemandeDevisComponent implements OnInit {
  constructor(
    private productStorageService: ProductStorageService,
    private devisService: DevisService
  ) {}

  product: Product | null = null;
  selectedProducts: any[] = [];

  clientData: ClientData = {
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    gouvernorat: '',
    societe: ''
  };

  ngOnInit(): void {
    // Charger les produits
    const productData = localStorage.getItem('selectedProduct');
    const parsedProducts = productData ? JSON.parse(productData) : [];
    this.selectedProducts = Array.isArray(parsedProducts) ? parsedProducts : [parsedProducts];

    // Charger les données du client
    const clientRaw = localStorage.getItem('client');
    if (clientRaw) {
      const client = JSON.parse(clientRaw);
      this.clientData = {
        prenom: client.prenom || '',
        nom: client.nom || '',
        email: client.email || '',
        telephone: client.phone || '',
        gouvernorat: client.gouvernorat || '',
        societe: '' // à remplir manuellement par le client
      };
    }
  }

  removeProduct(productToRemove: any) {
    this.selectedProducts = this.selectedProducts.filter(
      product => product.name !== productToRemove.name
    );
    localStorage.setItem('selectedProduct', JSON.stringify(this.selectedProducts));
  }

  envoyerDevis() {
    const clientRaw = localStorage.getItem('client');
    const client = clientRaw ? JSON.parse(clientRaw) : null;
    const idClient = client?.id;
  
    if (!idClient || !this.clientData.societe || this.selectedProducts.length === 0) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
  
    const payloadDevis = {
      societe: this.clientData.societe,
      id_client: idClient
    };
  
    // Étape 1 : créer le devis
    this.devisService.createDevis(payloadDevis).subscribe({
      next: (response: any) => {
        const idDevis = response.devis.id; // ← ici tu récupères bien l'id
        console.log("res",response);
    //const idDevis = 9; // Remplacez par la valeur réelle de l'ID du devis
        // Étape 2 : créer chaque ligne du devis
        this.selectedProducts.forEach(product => {
          const payloadLigne = {
            id_devis: idDevis,
            id_product: product.id,
            quantite: product.quantity || 1 // valeur par défaut
          };
  console.log('Payload ligne:', payloadLigne);
          this.devisService.createLigneDevis(payloadLigne).subscribe({
            next: () => {
              console.log(`Ligne ajoutée pour ${product.name}`);
            },
            error: (err) => {
              console.error('Erreur ligne devis :', err);
            }
          });
        });
  
        alert('Devis envoyé avec succès !');
      },
      error: (err) => {
        console.error('Erreur lors de l\'envoi du devis :', err);
        alert('Erreur lors de l\'envoi du devis.');
      }
    });
  }
  
}
