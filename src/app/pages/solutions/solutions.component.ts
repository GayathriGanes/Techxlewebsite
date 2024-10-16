import { Component } from "@angular/core";
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
    /*services = [
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
  ];*/
  services = [
    { name: 'Power Platform Solution', image: 'assets/logo/banner.png', isHovered: false },
    { name: 'Cloud App Development', image: 'assets/cloud-app.jpg', isHovered: false },
    { name: 'Staffing Service', image: 'assets/staffing-service.jpg', isHovered: false },
    { name: 'Full Stack Development', image: 'assets/full-stack.jpg', isHovered: false },
    { name: 'UI/UX Designing', image: 'assets/ui-ux-design.jpg', isHovered: false }
  ];

  hoverIn(service:any) {
    service.isHovered = true;
  }

  hoverOut(service:any) {
    service.isHovered = false;
  }
}    

