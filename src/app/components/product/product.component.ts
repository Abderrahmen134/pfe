import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { TypeService } from 'src/app/services/type.service';
import { Type } from 'src/app/models/model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  allProducts: any[] = [];
  typesProducts: Type[] = [];
  selectedTypes: Type[] = [];
  constructor(
    private router: Router,
    private productService: ProductService,
    private authService: AuthService,
    private typeService: TypeService
  ) {}

  ngOnInit(): void {
    this.typeService.getTypes().subscribe(res => {
      this.typesProducts = res;}
    );
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.allProducts = data; // Stocker tous les produits pour le filtrage
    });
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/product-detail', productId]);
  }
  addToCart(product: any): void {
  
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/signin']);
    } else {
      // logique pour ajouter le produit
      console.log('Produit ajouté');
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
  
filterProduct(){
  console
.log('Selected Types:', this.selectedTypes);
console.log('All Products:', this.allProducts);
this.products=this.selectedTypes.length>0?
   this.allProducts.filter(product =>
  this.selectedTypes.some(type => product.type_id == type.id)
):this.allProducts;
}

}