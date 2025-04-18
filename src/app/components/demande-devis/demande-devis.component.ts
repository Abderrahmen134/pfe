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
  ngOnInit(): void {
    this.product = this.productStorageService.getProduct(); // Récupère le produit du service ou localStorage
  }

}
