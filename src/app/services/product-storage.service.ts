import { Injectable } from '@angular/core';
import { Product } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {
  private key = 'selectedProduct';

  setProduct(product: Product): void {
    localStorage.setItem(this.key, JSON.stringify(product));
  }

  getProduct(): Product | null {
    const item = localStorage.getItem(this.key);
    return item ? JSON.parse(item) : null;
  }

  clearProduct(): void {
    localStorage.removeItem(this.key);
  }
}