import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrl: './devops.component.css'
})
export class DevopsComponent implements OnInit {
  currentSection: string = 'overview';
  currentSectionTitle: string = 'Overview';
  isNavbarCollapsed: boolean = false;
  scrollDisabled: boolean = false; 
  ngOnInit() {
    if(typeof window !=='undefined' && typeof localStorage !=='undefined') {
    const savedSection = localStorage.getItem('currentSection');
    if (savedSection) {
      this.scrollToSection(savedSection);
    }
   }
  }
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 200;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.scrollDisabled = true;
      setTimeout(() => {
        this.scrollDisabled = false;
      }, 1000);
      this.updateSectionTitle(section);
      this.currentSection = section;
      localStorage.setItem('currentSection', section);
      if (this.isNavbarCollapsed) {
        this.isNavbarCollapsed = false;
      }
    }
  }
  updateSectionTitle(section: string) {
    const sectionTitles: any = {
      overview: 'Overview',
      approach: 'Our Approach',
      capabilities:'Our Capabilities',
      impact: 'Impact',
    };
    this.currentSectionTitle = sectionTitles[section];
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.scrollDisabled) {
      return;
    }
    const sections = ['overview', 'approach','capabilities', 'impact'];
    let closestSection = null;
    let minDistance = Number.MAX_VALUE;
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const distanceFromTop = Math.abs(rect.top);  
 
        if (rect.top < window.innerHeight && rect.bottom > 0 && distanceFromTop < minDistance) {
          minDistance = distanceFromTop;
          closestSection = section;
        }
      }
    }); 
    if (closestSection && closestSection !== this.currentSection) {
      this.currentSection = closestSection;
      this.updateSectionTitle(closestSection);
      localStorage.setItem('currentSection', closestSection);
    }
  }  
  currentImage: string = "./assets/images/smiling-business-lady-working-with-colleagues 1.png"; // default image path
  imageArray:string[] = ["smiling-business-lady-working-with-colleagues 1.png", "222.png", "integration.png", "programming-background-with-person-working-with-codes-computer 1.png","image_1054-transformed 1.png"];
  changeImage(panelNumber: number) {
    this.currentImage = './assets/images/'+this.imageArray[panelNumber-1];
  }
}
