import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ✅ tu avais oublié Router
import { Product } from 'src/app/models/model';
import { ProductStorageService } from 'src/app/services/product-storage.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    image: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router, // ✅ Ajouté pour la navigation
    private productService: ProductService,
    private productStorageService: ProductStorageService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductsById(productId).subscribe(data => {
      this.product = data;
    });
  }

  addstore(): void {
    this.productStorageService.setProduct(this.product);
    this.router.navigate(['/demande-devis']); // ✅ Navigation vers la page demande-devis
  }
}
