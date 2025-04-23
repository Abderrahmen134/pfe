import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/model';
import { ProductStorageService } from 'src/app/services/product-storage.service';

@Component({
  selector: 'app-demande-devis',
  templateUrl: './demande-devis.component.html',
  styleUrls: ['./demande-devis.component.scss']
})
export class DemandeDevisComponent implements OnInit {

  constructor(private productStorageService: ProductStorageService) {}
  product: Product | null = null;
  selectedProducts: any[] = [];
  ngOnInit(): void {
    const data = localStorage.getItem('selectedProduct');
  const parsed = data ? JSON.parse(data) : [];

  // Corriger ici : s'assurer que c'est bien un tableau
  this.selectedProducts = Array.isArray(parsed) ? parsed : [parsed];
  }
  removeProduct(productToRemove: any) {
    this.selectedProducts = this.selectedProducts.filter(
      product => product.name !== productToRemove.name
    );
    localStorage.setItem('selectedProduct', JSON.stringify(this.selectedProducts));
  }

}
