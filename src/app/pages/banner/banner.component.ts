import { Component,AfterViewInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements AfterViewInit{
 
  isSecondBannerVisible = false;
  constructor(private router: Router) {}
 
navigateToContact() {
  this.router.navigate(['/contact']);
}
 
ngAfterViewInit(): void {
  this.updateBannerVisibility();
}
 
@HostListener('window:scroll', ['$event'])
onScroll(): void {
  this.updateBannerVisibility();
}
 
private updateBannerVisibility(): void {
  const scrollY = window.scrollY;
  console.log(`Current scroll position: ${scrollY}px`);
  const threshold = window.innerHeight / 9; // Trigger change halfway through the viewport
 
  if (scrollY > threshold) {
    this.isSecondBannerVisible = true;
  } else {
    this.isSecondBannerVisible = false;
  }
}
 
 
}