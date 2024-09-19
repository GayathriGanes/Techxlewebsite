import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  navigateToAboutus() {
    this.router.navigate(['/aboutus']);
  }

  navigateToServices() {
    this.router.navigate(['/services']);
  }

  navigateToSolutions() {
    this.router.navigate(['/solutions']);
  }

  navigateToCareer() {
    this.router.navigate(['/career']);
  }
navigateToContact() {
  this.router.navigate(['/contact']);
}
navigateToPowerPlatform() {
  this.router.navigate(['/services/powerplatform']);
}

navigateToCloudApp() {
  this.router.navigate(['/services/cloudapp']);
}

navigateToStaffing() {
  this.router.navigate(['/services/staffing']);
}

navigateToFullStack() {
  this.router.navigate(['/services/fullstack']);
}

navigateToUIUX() {
  this.router.navigate(['/services/ui']);
}
  isBrowser: boolean; // To check if the platform is browser

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2 // Renderer2 for safe DOM manipulations
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.adjustFooterPosition(event.urlAfterRedirects);
      }
    });
  }

  adjustFooterPosition(url: string): void {
    // Adjust footer top value based on the route
    let topValue = '3172px'; // Default value for other pages

    // Check specific routes first
    if (url.includes('services/ui')) {
      topValue = '3780px';
    } else if (url.includes('solutions/design')) {
      topValue = '4771px';
    } else if (url.includes('/services')) {
      topValue = '1806px';
    } else if (url.includes('/solutions')) {
      topValue = '1642px';
    } else if (url.includes('/aboutus')) {
      topValue = '2892px';
    } else if (url.includes('/contact')) {
      topValue = '900px';
    } else if (url.includes('/leader')) {
      topValue = '1520px';
    }

    // Set the CSS variable to update dynamically
    document.documentElement.style.setProperty('--footer-top', topValue);
  }
  
}
