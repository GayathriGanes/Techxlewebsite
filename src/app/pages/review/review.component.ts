import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  currentSection: string = 'challenges';
  currentSectionTitle: string = 'Challenges';
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
      challenges: 'Challenges',
      solutions: 'Solutions',
      impact: 'Impact',
    };
    this.currentSectionTitle = sectionTitles[section];
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.scrollDisabled) {
      return;
    }
    const sections = ['challenges', 'solutions', 'impact'];
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
  @ViewChild('container', { read: ElementRef }) container!: ElementRef;
  services = [
    { name: 'Lab Automation & Reaservation', image: './assets/images/m11.png', isHovered: false,route:'/solutions/lab-automation-&-reservation' },
    { name: 'Inventory Management', image: './assets/images/m12.png', isHovered: false,route:'/solutions/inventory-management' },
    { name: 'Acquisition Support For Labs', image: './assets/images/m13.png', isHovered: false,route:'/solutions/acquisition-support-for-labs' },
    { name: 'Sample Tracking', image: './assets/images/m14.png', isHovered: false,route:'/solutions/sample-tracking' },
    { name: 'Project Portfolio Management', image: './assets/images/m15.png', isHovered: false,route:'/solutions/project-portfolio-management' },
    { name: 'Review Board Management', image: './assets/images/bn1.png', isHovered: false,route:'/solutions/review-board-management' },
    { name: 'Grant Applications', image: './assets/images/bn2.png', isHovered: false,route:'/solutions/grant-applications' },
    { name: 'Healthcare Portal', image: './assets/images/m20.png', isHovered: false,route:'/solutions/healthcare-portal' },
    { name: 'PSR', image: './assets/images/m21.png', isHovered: false,route:'/solutions/psr' },
    { name: 'Custom Sales CRM Platform ', image: './assets/images/Group 10412.png', isHovered: false,route:'/solutions/custom-sales-crm-platform' },
  ];
  hoverIn(service:any) {
    service.isHovered = true;
  }
  hoverOut(service:any) {
    service.isHovered = false;
  }
  next() {
    this.container.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
  prev() {
    this.container.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }
}
