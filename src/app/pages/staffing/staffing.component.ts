import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import{MatExpansionModule} from '@angular/material/expansion';
 
@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrl: './staffing.component.css'
})
export class StaffingComponent implements OnInit {
  navigateToSolutions() {
    this.router.navigate(['/services']); // Adjust the path as needed
  }
navigateToContact() {
  this.router.navigate(['/contact']);
}
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
 
  currentImage: string = "assets/images/man-holding-group-people-group-that-has-man-suit-man-suit-holding-white-shirt_1222383-13503-transformed 1.png"; // default image path
 
  changeImage(panelNumber: number) {
    switch (panelNumber) {
      case 1:
        this.currentImage = 'assets/images/man-holding-group-people-group-that-has-man-suit-man-suit-holding-white-shirt_1222383-13503-transformed 1.png';
        break;
      case 2:
        this.currentImage = 'assets/images/smiling-business-lady-working-with-colleagues 1.png';
        break;
      case 3:
        this.currentImage = 'assets/images/index-finger-pressing-virtual-photo 1.png';
        break;
        case 4:
        this.currentImage = 'assets/images/1-_rj_JJish-transformed 1.png';
        break;
      default:
        this.currentImage = 'assets/images/capabilities.png';
    }
  }
  onSubmit() {
    // Handle form submission logic here
    alert('Form submitted!');
  }
}