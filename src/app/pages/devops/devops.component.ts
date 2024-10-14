import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import{MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrl: './devops.component.css'
})
export class DevopsComponent implements OnInit {
  @ViewChild('container', { read: ElementRef }) container!: ElementRef;
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
      } else if (url.includes('#ourapproach')) {
        this.setActiveLink('ourapproach');
      } else if (url.includes('#ourcapabilities')) {
        this.setActiveLink('ourcapabilities');
      } else if (url.includes('#impact')) {
        this.setActiveLink('impact');
      }
     
    }
  });    
}
setActiveLink(link: string) {
  this.activeLink = link;
}
 
  currentImage: string = 'assets/images/turned-gray-laptop-computer 1.png'; // default image path
 
  changeImage(panelNumber: number) {
    switch (panelNumber) {
      case 1:
        this.currentImage = 'assets/images/turned-gray-laptop-computer 1.png';
        break;
      case 2:
        this.currentImage = 'assets/images/222.png';
        break;
      case 3:
        this.currentImage = 'assets/images/repairman-doing-annual-system-servicing 1.png';
        break;
        case 4:
        this.currentImage = 'assets/images/application-programming-interface-hologram (1) 1.png';
        break;
        case 5:
        this.currentImage = 'assets/images/capabilities.png';
        break;
      default:
        this.currentImage = 'assets/images/capabilities.png';
    }
  }

}
