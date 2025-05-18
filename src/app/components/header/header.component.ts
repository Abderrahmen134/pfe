import { Component, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  scrolled = false;
  isAdminRoute = false;
  isLoggedIn = false;

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {
    this.setupRouteListener();
    this.isLoggedIn = !!localStorage.getItem('client');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 50;
  }

  private setupRouteListener() {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.isAdminRoute = event.urlAfterRedirects.startsWith('/admin') || event.urlAfterRedirects === '/report';
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isLoggedIn = !!localStorage.getItem('client');
    });
  }
  logout() {
    localStorage.removeItem('client');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.isLoggedIn = false;
    this.router.navigate(['/signin']);
  }
  
  
}