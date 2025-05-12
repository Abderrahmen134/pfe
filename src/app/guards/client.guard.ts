import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token && role === 'client') {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
  
}
