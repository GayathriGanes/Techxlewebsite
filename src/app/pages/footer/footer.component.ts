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
export class FooterComponent /*implements OnInit*/ {
navigateToContact() {
  this.router.navigate(['/contact']);
}
navigateToServices() {
  this.router.navigate(['/services']);
}

navigateToSolutions() {
  this.router.navigate(['/solutions']);
}
navigateToAboutus() {
  this.router.navigate(['/aboutus']);
}
navigateToCareer() {
  this.router.navigate(['/career']);
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
  isBrowser: boolean;
 
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
 
  /*ngOnInit(): void {
   
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.adjustFooterPosition(event.urlAfterRedirects);
      }
    });
  }
 
  adjustFooterPosition(url: string): void {
   
    let topValue = '3172px';
 
   
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
 
   
    document.documentElement.style.setProperty('--footer-top', topValue);
  }*/
 
}