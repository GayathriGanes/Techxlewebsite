import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isHomeVisible = true;
  activeLink: string = '';
  constructor(private router: Router) {}
 
  ngOnInit(): void {
    // Update the active link based on the current URL
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        if (url.includes('/contact')) {
          this.setActiveLink('contact');
        } else if (url.includes('/services')) {
          this.setActiveLink('services');
        } else if (url.includes('/solutions')) {
          this.setActiveLink('solutions');
        } else if (url.includes('/aboutus')) {
          this.setActiveLink('aboutus');
        } else if (url.includes('/career')) {
          this.setActiveLink('career');
        }
      }
    });
  }
 
    toggleHomeVisibility() {
        this.isHomeVisible = false;
    }
    ttoggleHomeVisibility() {
      this.isHomeVisible = true;
      this.setActiveLink("");
  }
  setActiveLink(link: string) {
    this.activeLink = link;
  }
}