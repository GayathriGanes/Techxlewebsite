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
    { title: 'Power Platform Solution', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/1.png',route: '/services/powerplatform'},
    { title: 'Cloud App Development', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/2.png',route: '/services/cloudapp' },
    { title: 'Staffing Service', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/3.png',route: '/services/staffing' },
    { title: 'Full Stack Development', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/4.png',route: '/services/fullstack' },
    { title: 'UI/UX Designing', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/5.png',route: '/services/ui' },
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
