import { Component } from '@angular/core';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  services = [
    { name: 'Lab Automation & Reservation', image: './assets/images/m11.png', isHovered: false,route:'/solutions/lab-automation-&-reservation' },
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
}
