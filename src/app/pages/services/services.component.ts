import { Component}from '@angular/core';

 
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServiceComponent {
  services = [
    { title: 'Power Platform Solution',  description: 'Our team of professionals creates and deploys tailored solutions to optimize workflows and boost productivity leveraging low-code tools',icon: 'assets/logo/1.svg',route:'/powerplatform'},
    { title: 'Cloud App Development',  description: 'From concept to deployment, our cloud application development services ensure your business adapts and flourishes in the digital ecosystem,', icon: 'assets/logo/2.svg',route: '/cloudapp'},
    { title: 'Staffing Service',  description: 'Our individuals are not just highly skilled but also align with your company’s aims and culture, ensuring a perfect fit for your team.', icon: 'assets/logo/3.svg',route: '/staffing'},
    { title: 'Full Stack Development',  description: 'Our expert team designs and deploys both front-end and back-end solutions, assuring seamless integration and optimal performance across your entire application. ', icon: 'assets/logo/4.svg',route: '/fullstack' },
    { title: 'UI/UX Designing', description: 'We fashion intuitive and visually appealing interfaces that provide a seamless user experience,', icon: 'assets/logo/5.svg',route: '/ui' },
    { title: 'AI Application',  description: 'We create custom AI-driven solutions that enhance business operations and customer engagement using tools like TensorFlow', icon: 'assets/images/Frame 10406.svg',route: '/ai' },
    { title: 'Devops',  description: 'Our team specializes in streamlining development and operations to ensure faster, more reliable software delivery.', icon: 'assets/images/Group 10405.svg',route: '/devops' },
  ];
 
}