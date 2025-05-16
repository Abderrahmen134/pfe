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

  // Tenter d'abord une connexion client
  this.http.post<any>('http://127.0.0.1:8000/api/login', payload)
    .subscribe({
      next: (res) => {
        if (res.client) {
          this.authService.setRole('client');
          localStorage.setItem('client', JSON.stringify(res.client));
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        }
      },
      error: (errClient) => {
        // Si la connexion client échoue, tenter admin
        this.http.post<any>('http://127.0.0.1:8000/api/admin/login', payload)
          .subscribe({
            next: (resAdmin) => {
              if (resAdmin.admin) {
                this.authService.setRole('admin');
                localStorage.setItem('admin', JSON.stringify(resAdmin.admin));
                localStorage.setItem('token', resAdmin.token);
                this.router.navigate(['/admin']);
              }
            },
            error: (errAdmin) => {
              console.error('Échec de la connexion client et admin', errAdmin);
              alert("Échec de la connexion. Veuillez vérifier vos identifiants.");
            }
          });
      }
    });
}

}