import { Component,HostListener,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isScrolled: boolean = false;    
    @HostListener('window:scroll', [])
      onWindowScroll(): void {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
          this.isScrolled = true;
        } else {
          this.isScrolled = false;
        }
      }
      @ViewChild('container', { read: ElementRef }) container!: ElementRef;

      cards = [
        { title: 'Power Platform Solution', content: 'Our team of professionals creates and deploys tailored solutions to optimize workflows and boost productivity leveraging low-code tools', symbol: './assets/logo/1.svg',route: '/powerplatform'},
        { title: 'Cloud App Development', content: 'From concept to deployment, our cloud application development services ensure your business adapts and flourishes in the digital ecosystem,increasing efficiency and innovation.', symbol: './assets/logo/2.svg',route: '/cloudapp' },
        { title: 'Staffing Service', content: 'Our individuals are not just highly skilled but also align with your company’s aims and culture, ensuring a perfect fit for your team.', symbol: './assets/logo/3.svg',route: '/staffing' },
        { title: 'Full Stack Development', content: 'Our expert team designs and deploys both front-end and back-end solutions, assuring seamless integration and optimal performance across your entire application. ', symbol: './assets/logo/4.svg',route: '/fullstack' },
        { title: 'UI/UX Designing', content: 'We fashion intuitive and visually appealing interfaces that provide a seamless user experience,ensuring your applications are both functional and engaging.', symbol: './assets/logo/5.svg',route: '/ui' },
        { title: 'AI Application', content: 'We create custom AI-driven solutions that enhance business operations and customer engagement using tools like TensorFlow', symbol: './assets/images/Frame 10406.svg',route: '/ai' },
        { title: 'DevOps', content: 'Our team specializes in streamlining development and operations to ensure faster, more reliable software delivery.', symbol: './assets/images/Group 10405.svg',route: '/devosps' },
      
      ];
      constructor() {}
      services = [
        { name: 'Lab Automation & Reservation', image: './assets/images/m11.png', isHovered: false,route:'/lab-automation-&-reservation' },
        { name: 'Inventory Management', image: './assets/images/m12.png', isHovered: false,route:'/inventory-management' },
        { name: 'Acquisition Support for Labs', image: './assets/images/m13.png', isHovered: false,route:'/acquisition-support-for-labs' },
       
      ];
     
      hoverIn(service:any) {
        service.isHovered = true;
      }
     
      hoverOut(service:any) {
        service.isHovered = false;
      }
    
    
      next() {
        this.container.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
      }
    
      prev() {
        this.container.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
      }
     
}
