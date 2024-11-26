import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appNavbar]',
  exportAs: 'appNavbar' 
})
export class NavbarDirective implements OnInit {
  @Input() sections: string[] = [];
  @Input() headerOffset: number = 200;
  @Input() sectionTitles: { [key: string]: string } = {};

  currentSection: string = '';
  currentSectionTitle: string = '';
  isNavbarCollapsed: boolean = false;
  scrollDisabled: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedSection = localStorage.getItem('currentSection');
      if (savedSection) {
        this.scrollToSection(savedSection);
      }
    }
  }

  @HostListener('click', ['$event'])
  toggleNavbar(event: Event) {
    const toggleButton = this.el.nativeElement.querySelector('.navbar-toggler');
    if (toggleButton && toggleButton.contains(event.target)) {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - this.headerOffset;
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
    this.currentSectionTitle = this.sectionTitles[section] || section;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.scrollDisabled) {
      return;
    }
    let closestSection = null;
    let minDistance = Number.MAX_VALUE;
    this.sections.forEach(section => {
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
  scrollToSectionAndClose(section: string) {
    this.scrollToSection(section); 
    this.isNavbarCollapsed = false; 
  }
  
}

