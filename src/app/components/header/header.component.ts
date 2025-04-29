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
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {
    this.setupRouteListener();
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
      this.isAdminRoute = event.urlAfterRedirects.startsWith('/admin');
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}