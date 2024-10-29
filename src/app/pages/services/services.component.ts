import { Component}from '@angular/core'; 
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServiceComponent {
  services = [
    { title: 'Power Platform Solution',  description: 'Our team of professionals creates and deploys tailored solutions to optimize workflows and boost productivity leveraging low-code tools.',icon: './assets/logo/1.svg',route:'/services/power-platform-solution'},
    { title: 'Cloud App Development',  description: 'From concept to deployment, our cloud application development services ensure your business adapts and flourishes in the digital ecosystem, increasing efficiency and innovation.', icon: './assets/logo/2.svg',route: '/services/cloud-app-development'},
    { title: 'Staffing Service',  description: 'Our individuals are not just highly skilled but also align with your company’s aims and culture, ensuring a perfect fit for your team.', icon: './assets/logo/3.svg',route: '/services/staffing-service'},
    { title: 'Full Stack Development',  description: 'Our expert team designs and deploys both front-end and back-end solutions, assuring seamless integration and optimal performance across your entire application. ', icon: './assets/logo/4.svg',route: '/services/full-stack-development' },
    { title: 'UI/UX Designing', description: 'We fashion intuitive and visually appealing interfaces that provide a seamless user experience, ensuring your applications are both functional and engaging.', icon: './assets/logo/5.svg',route: '/services/ui-ux-designing' },
    { title: 'AI Application',  description: 'We create custom AI-driven solutions that enhance business operations and customer engagement using tools like TensorFlow.', icon: './assets/images/Frame 10406.svg',route: '/services/ai-application' },
    { title: 'DevOps',  description: 'Our team specializes in streamlining development and operations to ensure faster, more reliable software delivery.', icon: './assets/images/Group 10405.svg',route: '/services/devops' },
  ]; 
}