import { Component,ViewChild,ElementRef,} from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  activeContent: string = 'bac-1-content';
  expandedContent: string | null = 'bac-1-content';
  lockedContent: boolean = false;
  hoveredContent: string | null = null;

  handleMouseOver(contentClass: string) {
    if (!this.lockedContent) {
      this.activeContent = contentClass;
      this.hoveredContent = contentClass;
    }
  }

  handleMouseOut() {
    if (!this.lockedContent) {
      this.activeContent = 'bac-1-content';
      this.hoveredContent = null;
    }
  }

  handleClick(contentClass: string) {
    if (this.lockedContent && this.expandedContent === contentClass) {
      // If clicking on the already locked content, unlock it
      this.lockedContent = false;
      this.expandedContent = null;
      this.activeContent = 'bac-1-content';
    } else {
      // Lock the clicked content
      this.activeContent = contentClass;
      this.expandedContent = contentClass;
      this.lockedContent = true;
    }
  }
  @ViewChild('container', { read: ElementRef }) container!: ElementRef;

  cards = [
    {
      name:"Krishna Suheendra",
      role:"Chairman,Founder & CEO",
      para:"We look forward to supercharging the next phase of our growth with optimism and confidence,ready to size the many opportunities ahead. Our growth strategy for the emerging digital future is built on five strategic objectives.",
      image: 'assets/logo/banner.png',
      ima:'assets/logo/Linked in.png'
    },
    {
      name:"Durai Samy",
      role:"Chairman,Founder & CEO",
      para:"We look forward to supercharging the next phase of our growth with optimism and confidence,ready to size the many opportunities ahead. Our growth strategy for the emerging digital future is built on five strategic objectives.",
      image: 'assets/logo/banner.png',
      ima:'assets/logo/Linked in.png'
    },

  ];  
  next() {
    this.container.nativeElement.scrollBy({ left: 1200, behavior: 'smooth' });
  }

  prev() {
    this.container.nativeElement.scrollBy({ left: -1200, behavior: 'smooth' });
  }
  constructor(private router: Router) {}

  navigateToService() {
    this.router.navigate(['/services']); // Replace '/service' with your actual route
  }
  navigateToContact(){
    this.router.navigate(['/contact']);
  }
  navigateToleader(){
    this.router.navigate(['/leader']);
  }
}
