import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products = [
    { id: 1, title: 'Product 1', description: 'Description for product 1', image: 'assets/images/product1.jpg' },
    { id: 2, title: 'Product 2', description: 'Description for product 2', image: 'assets/images/product2.jpg' },
  ];
  

  constructor(private router: Router) {}

  viewProductDetail(productId: number) {
    this.router.navigate(['/product-detail', productId]);
  }
}
