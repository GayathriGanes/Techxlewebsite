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
    { title: 'Power Platform Solution', content: 'Our team of professionals creates and deploys tailored solutions to optimize workflows and boost productivity leveraging low-code tools', symbol: 'assets/logo/1.svg',route: '/services/powerplatform'},
    { title: 'Cloud App Development', content: 'From concept to deployment, our cloud application development services ensure your business adapts and flourishes in the digital ecosystem,', symbol: 'assets/logo/2.svg',route: '/services/cloudapp' },
    { title: 'Staffing Service', content: 'Our individuals are not just highly skilled but also align with your company’s aims and culture, ensuring a perfect fit for your team.', symbol: 'assets/logo/3.svg',route: '/services/staffing' },
    { title: 'Full Stack Development', content: 'Our expert team designs and deploys both front-end and back-end solutions, assuring seamless integration and optimal performance across your entire application. ', symbol: 'assets/logo/4.svg',route: '/services/fullstack' },
    { title: 'UI/UX Designing', content: 'We fashion intuitive and visually appealing interfaces that provide a seamless user experience,', symbol: 'assets/logo/5.svg',route: '/services/ui' },
    { title: 'AI Application', content: 'We create custom AI-driven solutions that enhance business operations and customer engagement using tools like TensorFlow', symbol: 'assets/images/Frame 10406.svg',route: '/services/ai' },
    { title: 'DevOps', content: 'Our team specializes in streamlining development and operations to ensure faster, more reliable software delivery.', symbol: 'assets/images/Group 10405.svg',route: '/services/devops' },
  
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
