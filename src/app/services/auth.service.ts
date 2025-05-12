// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string = '';
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // ou 'api_token'
  }


  setRole(role: string) {
    this.role = role;
    localStorage.setItem('role', role);
  }

  getRole(): string {
    return this.role || localStorage.getItem('role') || '';
  }

  isClient(): boolean {
    return this.getRole() === 'client';
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }
}
