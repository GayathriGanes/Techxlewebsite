import { Component,OnInit,ViewChild,ElementRef,HostListener} from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent implements OnInit{
  /*@ViewChild('container', { read: ElementRef }) container!: ElementRef;

  cards = [
    {
      title: 'Power Platform Solution',
      image: 'assets/logo/banner.png',
      route: '/power'
    },
    {
      title: 'Cloud App Development',
      image: 'assets/logo/banner.png',
      route: '/cloud'
    },
    {
      title: 'Staffing Service',
      image: 'assets/logo/banner.png',
      route: '/staff'
    },
    {
      title: 'Full Stack Development',
      image: 'assets/logo/banner.png',
      route: '/stack'
    },
    {
      title: 'UI/UX Designing',
      image: 'assets/logo/banner.png',
      route: '/design'
    }
  ];  
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
      const toolbar = document.querySelector('.nav-toolbar') as HTMLElement;
      const sections = document.querySelectorAll('section');
      let toolbarShouldBeFixed = false;
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top<=90 && rect.bottom>=90) { // Adjust as needed
          toolbarShouldBeFixed = true;
        }
      });
  
      if (toolbarShouldBeFixed) {
        toolbar.classList.add('fixed');
      } else {
        toolbar.classList.remove('fixed');
      }
    }
  activeLink: string = '';
  constructor(private router: Router,private route: ActivatedRoute) {}

 
  
  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        if (url.includes('#overview')) {
          this.setActiveLink('overview');
        } else if (url.includes('#challenges')) {
          this.setActiveLink('challenges');
        } else if (url.includes('#solutions')) {
          this.setActiveLink('solutions');
        } else if (url.includes('#impact')) {
          this.setActiveLink('impact');
        } else if (url.includes('#platforms')) {
          this.setActiveLink('platform');
        }
        
      }
    });    
  }
  setActiveLink(link: string) {
    this.activeLink = link;
  }
 
  next() {
    this.container.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  prev() {
    this.container.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }*/
    
      currentSection: string = 'overview'; // Default section
      currentSectionTitle: string = 'Overview'; // Default section title for mobile
      isNavbarCollapsed: boolean = false; // Ensure the navbar is initially collapsed (menu closed)
    
      ngOnInit() {
        // Restore the section on page reload using local storage
        const savedSection = localStorage.getItem('currentSection');
        if (savedSection) {
          this.scrollToSection(savedSection);
        }
      }
    
      // Function to toggle the navbar on mobile
      toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
      }
    
      // Scroll to the section when a navbar link is clicked
      scrollToSection(section: string) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          this.updateSectionTitle(section);
          this.currentSection = section;
    
          // Save current section in local storage to restore on refresh
          localStorage.setItem('currentSection', section);
    
          // Close the navbar toggler after clicking a link (for mobile)
          if (this.isNavbarCollapsed) {
            this.isNavbarCollapsed = false;
          }
        }
      }
    
      // Update the mobile navbar title to reflect the clicked section
      updateSectionTitle(section: string) {
        const sectionTitles: any = {
          overview: 'Overview',
          solutions: 'Solutions',
          impact: 'Impact',
        };
        this.currentSectionTitle = sectionTitles[section];
      }
    
      @HostListener('window:scroll', [])
      onWindowScroll() {
        const sections = ['overview', 'solutions', 'impact'];
        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight + 100) {
              this.currentSection = section;
              this.updateSectionTitle(section);
              // Save current section in local storage when scrolling
              localStorage.setItem('currentSection', section);
            }
          }
        });
      }
    
    
    
    
    
    
}
