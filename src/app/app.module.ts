import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DemandeDevisComponent } from './components/demande-devis/demande-devis.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DevisNonTraiteComponent } from './components/devis-non-traite/devis-non-traite.component';
import { DevisTraiteComponent } from './components/devis-traite/devis-traite.component';
import { StatutComponent } from './components/statut/statut.component';
import { AdminDevisComponent } from './components/admin-devis/admin-devis.component';
import { ClientDevisComponent } from './components/client-devis/client-devis.component';
import { AdminEncoursComponent } from './components/admin-encours/admin-encours.component';
import { AdminConfirmeComponent } from './components/admin-confirme/admin-confirme.component';
import { AdminEncoursLivraisonComponent } from './components/admin-encours-livraison/admin-encours-livraison.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    ProductComponent,
    ProductDetailComponent,
    DemandeDevisComponent,
    SignupComponent,
    SigninComponent,
    AdminUsersComponent,
    AdminProductsComponent,
    SidebarComponent,
    DevisNonTraiteComponent,
    DevisTraiteComponent,
    StatutComponent,
    AdminDevisComponent,
    ClientDevisComponent,
    AdminEncoursComponent,
    AdminConfirmeComponent,
    AdminEncoursLivraisonComponent,
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessagesModule,    
    FormsModule,                              // template-driven forms :contentReference[oaicite:6]{index=6}
    ReactiveFormsModule,
    CommonModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MessagesModule,
    ButtonModule,
        // PrimeNG
    TableModule,
    DialogModule,
    ButtonModule,
    InputNumberModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
