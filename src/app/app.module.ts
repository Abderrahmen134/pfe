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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
