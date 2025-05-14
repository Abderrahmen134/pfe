import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

 products: Product[] = [];
   selectedProduct: Product | null = null;
   productDialog: boolean = false;
   productForm!: FormGroup;
   submitted: boolean = false;
   types: any[] = []; // Tableau des types
   constructor(private productService: ProductService,private typeService: TypeService, private fb: FormBuilder) {}
 
   ngOnInit(): void {
     this.loadProducts();
     this.loadTypes(); // <== charger les types
    
     this.productForm = this.fb.group({
       id: [null],
       name: ['', Validators.required],
       description: [''],
       quantity: [0, Validators.required],
       price: [0, Validators.required],
       image: [''],
        type_id: [null]
     });
      console.log("bnj:",this.types);
   }
loadTypes() {
  this.typeService.getTypes().subscribe(res => {
    this.types = res;
    console.log('Types chargés :', this.types); // ✅ CORRECT ici
  });
}

   loadProducts() {
     this.productService.getAll().subscribe(res => this.products = res);
   }
 
   openNew() {
     this.productForm.reset(); // Vide le formulaire
     this.productForm.patchValue({ quantity: 0, price: 0 }); // Tu peux mettre des valeurs par défaut si tu veux
     this.selectedProduct = null;
     this.productDialog = true;
   }
   
   editProduct(product: Product) {
     this.selectedProduct = { ...product }; // Cloner pour éviter de modifier directement dans la liste
     this.productForm.patchValue(this.selectedProduct);
     this.productDialog = true;
   }
   
   deleteProduct(product: Product) {
     if (confirm(`Are you sure you want to delete ${product.name}?`)) {
       this.productService.delete(product.id).subscribe(() => {
         this.loadProducts();
       });
     }
   }
   
   saveProduct() {
     this.submitted = true;
     if (this.productForm.invalid) {
       return;
     }
   
     const formData = this.productForm.value;
   
     if (this.selectedProduct) {
       // Update product
       this.productService.update(this.selectedProduct.id, formData).subscribe(() => {
         this.loadProducts();
         this.productDialog = false;
       });
     } else {
       // Create new product
       this.productService.create(formData).subscribe(() => {
         this.loadProducts();
         this.productDialog = false;
       });
     }
   }
   
   hideDialog() {
     this.productDialog = false;
     this.submitted = false;
   }
   notifications = {
    devis: 0,
    confirmation: 0,
    confirme: 0,
    livraison: 0,
    livre: 0,
    dashboard: 0,
    produits: 0,
    clients: 0,
    admins: 0
  };

  get totalNotifications(): number {
    return this.notifications.devis + 
           this.notifications.confirmation +
           this.notifications.confirme +
           this.notifications.livraison +
           this.notifications.livre;
  }
   
}
