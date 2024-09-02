import { Component } from "@angular/core";
import { Router } from '@angular/router';
@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
    services = [
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
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([`solutions/${route}`]);
  }
    

}
