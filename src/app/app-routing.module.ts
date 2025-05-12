import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { DemandeDevisComponent } from './components/demande-devis/demande-devis.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { DevisNonTraiteComponent } from './components/devis-non-traite/devis-non-traite.component';
import { DevisTraiteComponent } from './components/devis-traite/devis-traite.component';
import { StatutComponent } from './components/statut/statut.component';
import { AdminDevisComponent } from './components/admin-devis/admin-devis.component';
import { ClientDevisComponent } from './components/client-devis/client-devis.component';
import { AdminEncoursComponent } from './components/admin-encours/admin-encours.component';
import { AdminConfirmeComponent } from './components/admin-confirme/admin-confirme.component';
import { AdminEncoursLivraisonComponent } from './components/admin-encours-livraison/admin-encours-livraison.component';
import { ClientGuard } from './guards/client.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'product', component: ProductComponent },
  { path: '', component: ProductComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'demande-devis', component: DemandeDevisComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin-users', component: AdminUsersComponent, canActivate: [AdminGuard] },
  { path: 'admin-products', component: AdminProductsComponent, canActivate: [AdminGuard]  },
  {path: 'devis-non-traite', component: DevisNonTraiteComponent, canActivate: [AdminGuard] },
  {path: 'devis-traite', component: DevisTraiteComponent, canActivate: [AdminGuard]},
 // {path: 'status', component: StatutComponent},
  {path: 'admin-devis', component: AdminDevisComponent, canActivate: [AdminGuard] },
  { path: 'client-devis', component: ClientDevisComponent, canActivate: [ClientGuard] },
  {path: 'admin-encours', component: AdminEncoursComponent, canActivate: [AdminGuard]  },
  {path: 'admin-confirme', component:  AdminConfirmeComponent, canActivate: [AdminGuard] },
  {path: 'admin-encours-livraison', component:  AdminEncoursLivraisonComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
