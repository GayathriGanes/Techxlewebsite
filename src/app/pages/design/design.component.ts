import { Component,OnInit,ViewChild,ElementRef,HostListener} from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent implements OnInit{
  @ViewChild('container', { read: ElementRef }) container!: ElementRef;

  cards = [
    {
      title: 'Power Platform Solution',
      image: 'assets/logo/banner.png',
      route: 'power'
    },
    {
      title: 'Cloud App Development',
      image: 'assets/logo/banner.png',
      route: 'cloud'
    },
    {
      title: 'Staffing Service',
      image: 'assets/logo/banner.png',
      route: 'staff'
    },
    {
      title: 'Full Stack Development',
      image: 'assets/logo/banner.png',
      route: 'stack'
    },
    {
      title: 'UI/UX Designing',
      image: 'assets/logo/banner.png',
      route: 'design'
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

  navigateToSolutions() {
    this.router.navigate(['/solutions']); // Adjust the path as needed
  }
  
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
  navigateTo(route: string) {
    this.router.navigate([`solutions/${route}`]);
  }
  next() {
    this.container.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  prev() {
    this.container.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }
}
