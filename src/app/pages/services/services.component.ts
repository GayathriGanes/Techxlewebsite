import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';
 
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServiceComponent {
navigateToPowerplatform() {
throw new Error('Method not implemented.');
}
  @ViewChild('container', { read: ElementRef }) container!: ElementRef;
 
  cards = [
    { title: 'Power Platform Solution', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/1.svg',route: '/powerplatform'},
    { title: 'Cloud App Development', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/2.svg',route: '/cloudapp'},
    { title: 'Staffing Service', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/3.svg',route: '/staffing'},
    { title: 'Full Stack Development', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/4.svg',route: '/fullstack' },
    { title: 'UI/UX Designing', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/logo/5.svg',route: '/ui' },
    { title: 'AI Application', content: 'We create custom AI-driven solutions that enhance business operations and customer engagement using tools like TensorFlow', symbol: 'assets/images/Frame 10406.svg',route: '/ai' },
    { title: 'Devops', content: 'Our team specializes in streamlining development and operations to ensure faster, more reliable software delivery.', symbol: 'assets/images/Group 10405.svg',route: '/devops' },
  ];
 
  constructor(private router: Router){}
  navigateTo(Route: string) {
  this.router.navigate([`services/${Route}`]);
}
isHomeVisible: any;
card: any;
 
}
