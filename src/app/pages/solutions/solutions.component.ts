import { Component } from "@angular/core";
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {   
  services = [
    { name: 'Power Platform Solution', image: './assets/logo/banner.png', isHovered: false,route:'/power' },
    { name: 'Cloud App Development', image: './assets/logo/banner.png', isHovered: false,route:'/cloud' },
    { name: 'Staffing Service', image: './assets/logo/banner.png', isHovered: false,route:'/staff' },
    { name: 'Full Stack Development', image: './assets/logo/banner.png', isHovered: false,route:'/stack' },
    { name: 'UI/UX Designing', image: './assets/logo/banner.png', isHovered: false,route:'/design' }
  ];

  hoverIn(service:any) {
    service.isHovered = true;
  }

  hoverOut(service:any) {
    service.isHovered = false;
  }
}    

