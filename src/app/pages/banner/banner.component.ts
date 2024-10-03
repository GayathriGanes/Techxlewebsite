import { Component, AfterViewInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'] 
})
export class BannerComponent implements AfterViewInit {
  isSecondBannerVisible = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object 
  ) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateBannerVisibility(); 
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateBannerVisibility(); 
    }
  }

  private updateBannerVisibility(): void {
    const scrollY = window.scrollY;
    const threshold = window.innerHeight / 9; 

    if (scrollY > threshold) {
      this.isSecondBannerVisible = true;
    } else {
      this.isSecondBannerVisible = false;
    }
  }
}
