import { Component,ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceeComponent {
  @ViewChild('container', { read: ElementRef }) container!: ElementRef;

  cards = [
    { title: 'Power Platform Solution', content: 'Our team of professionals creates and deploys tailored solutions to optimize workflows and boost productivity leveraging low-code tools', symbol: 'assets/logo/1.svg',route: '/powerplatform'},
    { title: 'Cloud App Development', content: 'From concept to deployment, our cloud application development services ensure your business adapts and flourishes in the digital ecosystem,', symbol: 'assets/logo/2.svg',route: '/cloudapp' },
    { title: 'Staffing Service', content: 'Our individuals are not just highly skilled but also align with your company’s aims and culture, ensuring a perfect fit for your team.', symbol: 'assets/logo/3.svg',route: '/staffing' },
    { title: 'Full Stack Development', content: 'Our expert team designs and deploys both front-end and back-end solutions, assuring seamless integration and optimal performance across your entire application. ', symbol: 'assets/logo/4.svg',route: '/fullstack' },
    { title: 'UI/UX Designing', content: 'We fashion intuitive and visually appealing interfaces that provide a seamless user experience,', symbol: 'assets/logo/5.svg',route: '/ui' },
    { title: 'AI Application', content: 'We create custom AI-driven solutions that enhance business operations and customer engagement using tools like TensorFlow', symbol: 'assets/images/Frame 10406.svg',route: '/ai' },
    { title: 'Devops', content: 'Our team specializes in streamlining development and operations to ensure faster, more reliable software delivery.', symbol: 'assets/images/Group 10405.svg',route: '/devops' },
  
  ];
  constructor() {}


  next() {
    this.container.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  prev() {
    this.container.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }
 
 
 
}
