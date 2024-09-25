import { Component,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceeComponent {
  @ViewChild('container', { read: ElementRef }) container!: ElementRef;

  cards = [
    { title: 'Power Platform Solution', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/1.svg',route: '/services/powerplatform'},
    { title: 'Cloud App Development', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/2.svg',route: '/services/cloudapp' },
    { title: 'Staffing Service', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/3.svg',route: '/services/staffing' },
    { title: 'Full Stack Development', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/4.svg',route: '/services/fullstack' },
    { title: 'UI/UX Designing', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/5.svg',route: '/services/ui' },
  ];
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  next() {
    this.container.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  prev() {
    this.container.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }
}
