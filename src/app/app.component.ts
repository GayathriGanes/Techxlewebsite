import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls (plural)
})
export class AppComponent {
  title = 'web';
  isMenuScrolled: boolean = false; // Set the proper type

  // Method to scroll to top
  scrollToTop() {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }

  // Listen for scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Update the boolean based on scroll position
    this.isMenuScrolled = window.scrollY > 200; // Show button if scrolled more than 200px
  }
}
