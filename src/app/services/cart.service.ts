import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private selectedProduct: any;

  setProduct(Product: any) {
    this.selectedProduct = Product;
  }

  getProduct() {
    return this.selectedProduct;
  }
}
