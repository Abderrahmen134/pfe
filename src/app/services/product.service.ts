import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://127.0.0.1:8000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getProductsById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/'+id);
  }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://127.0.0.1:8000/api/products');
  }
  
  create(product: Product): Observable<Product> {
    return this.http.post<Product>('http://127.0.0.1:8000/api/products', product);
  }
  
  update(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`http://127.0.0.1:8000/api/products/${id}`, product);
  }
  
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://127.0.0.1:8000/api/products/${id}`);
  }
  
  
}

