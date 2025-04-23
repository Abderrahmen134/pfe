import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/product-detail', productId]);
  }
  addToCart(product: any): void {
    const stored = localStorage.getItem('selectedProduct');
    let products: any[] = [];
  
    try {
      const parsed = stored ? JSON.parse(stored) : [];
      products = Array.isArray(parsed) ? parsed : [parsed]; // 👉 assure qu’on a un tableau
    } catch (e) {
      products = [];
    }
  
    const exists = products.find((p: any) => p.id === product.id);
    if (!exists) {
      product.quantity = 1;
      products.push(product);
      localStorage.setItem('selectedProduct', JSON.stringify(products));
    }
  }
  
  


}