import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ✅ tu avais oublié Router
import { Product } from 'src/app/models/model';
import { AuthService } from 'src/app/services/auth.service';
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
    private productStorageService: ProductStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductsById(productId).subscribe(data => {
      this.product = data;
    });
  }

  addstore(): void {
    
      if (!this.authService.isLoggedIn()) {
        // Optionnel : Afficher un message ou une alerte
        alert('Veuillez vous connecter pour faire une demande de devis.');
        this.router.navigate(['/signin']);
      } else {
        // 👇 Place ici la logique pour enregistrer la demande de devis
        console.log('Demande de devis enregistrée !');
        this.productStorageService.setProduct(this.product);
    this.router.navigate(['/demande-devis']); // ✅ Navigation vers la page demande-devis
      }
    }
    
  }

