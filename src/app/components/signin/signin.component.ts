import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private authService:AuthService) {}

  onLogin() {
    const payload = {
      email: this.email,
      mot_de_passe: this.password
    };

    this.http.post<any>('http://127.0.0.1:8000/api/login', payload)
      .subscribe({
        next: (res) => {
          console.log('Connexion réussie', res);
          if (res.client) {
            this.authService.setRole('client');
          // Sauvegarder les infos du client et le token
          localStorage.setItem('client', JSON.stringify(res.client));
          localStorage.setItem('token', res.token);

          // Redirection vers une autre page (ex : dashboard ou home)
          this.router.navigate(['/']);
          }
        },
        error: (err) => {
          console.error('Erreur de connexion', err);
          alert("Échec de la connexion. Veuillez vérifier vos identifiants.");
        }
      });
  }
  onLoginAdmin() {
    const payload = {
      email: this.email,
      mot_de_passe: this.password
    };

    this.http.post<any>('http://127.0.0.1:8000/api/admin/login', payload)
      .subscribe({
        next: (res) => {
          console.log('Connexion réussie', res);
          if (res.admin) {
            this.authService.setRole('admin');
          // Sauvegarder les infos de l'admin et le token
          localStorage.setItem('admin', JSON.stringify(res.admin));
          localStorage.setItem('token', res.token);
          // Redirection vers une autre page (ex : dashboard ou home)
          this.router.navigate(['/admin']);
          }
        },
        error: (err) => {
          console.error('Erreur de connexion', err);
          alert("Échec de la connexion. Veuillez vérifier vos identifiants.");    }
        });
}
}