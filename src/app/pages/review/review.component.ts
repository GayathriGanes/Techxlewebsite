import { Component,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {




  @ViewChild('container', { read: ElementRef }) container!: ElementRef;
  services = [
    { name: 'Lab Automation & Reaservation', image: './assets/images/m11.png', isHovered: false,route:'/lab-automation-&-reservation' },
    { name: 'Inventory Management', image: './assets/images/m12.png', isHovered: false,route:'/inventory-management' },
    { name: 'Acquisition Support For Labs', image: './assets/images/m13.png', isHovered: false,route:'/acquisition-support-for-labs' },
    { name: 'Sample Tracking', image: './assets/images/m14.png', isHovered: false,route:'/sample-tracking' },
    { name: 'Project Portfolio Management', image: './assets/images/m15.png', isHovered: false,route:'/project-portfolio-management' },
    { name: 'Review Board Management', image: './assets/images/m16.png', isHovered: false,route:'/review-board-management' },
    { name: 'Grant Applications', image: './assets/images/m17.png', isHovered: false,route:'/grant-applications' },
    { name: 'Healthcare Portal', image: './assets/images/m20.png', isHovered: false,route:'/healthcare-portal' },
    { name: 'PSR', image: './assets/images/m21.png', isHovered: false,route:'/psr' },
    { name: 'Custom Sales CRM Platform ', image: './assets/images/Group 10412.png', isHovered: false,route:'/custom-sales-crm-platform' },
  ]; 

  hoverIn(service:any) {
    service.isHovered = true;
  }

  hoverOut(service:any) {
    service.isHovered = false;
  }
  constructor() { }


  next() {
    this.container.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  prev() {
    this.container.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }
}
