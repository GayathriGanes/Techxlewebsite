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
    { title: 'Power Platform Solution', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/images/power.png',route: '/powerplatform', style:'top: 250px'},
    { title: 'Cloud App Development', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/images/cloud.png',route: '/cloudapp', style:'top: 250px' },
    { title: 'Staffing Service', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/images/Staffing.png',route: '/staffing', style:'top: 250px' },
    { title: 'Full Stack Development', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/images/fullstack.png',route: '/fullstack', style:'top: 700px' },
    { title: 'UI/UX Designing', content: 'The mechanism for implementing application lifecycle management (ALM) in Power Apps', symbol: 'assets/images/UI.png',route: '/ui', style:'top: 700px' },
  ];
  
  constructor(private router: Router){}
  navigateTo(Route: string) {
  this.router.navigate([`services/${Route}`]);
}
isHomeVisible: any;
card: any;

}