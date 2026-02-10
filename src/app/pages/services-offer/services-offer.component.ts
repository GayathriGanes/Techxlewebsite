import { Component } from '@angular/core';

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services-offer',
  templateUrl: './services-offer.component.html',
  styleUrls: ['./services-offer.component.css']
})
export class ServicesOfferComponent {

  services: ServiceItem[] = [
    {
      title: 'AI Application',
      description:
        'We create custom AI-driven solutions that enhance business operations and customer engagement using tools like TensorFlow.',
      image: 'assets/images/ai-mask.png'
    },
    {
      title: 'Power Platform Solution',
      description:
        'Our team of professionals creates and deploys tailored solutions to optimize workflows and boost productivity leveraging low-code tools.',
      image: 'assets/images/mask-group-4.png'
    },
    {
      title: 'Cloud App Development',
      description:
        'From concept to deployment, our cloud application development services ensure your business adapts and flourishes in the digital ecosystem,increasing efficiency and innovation.',
      image: 'assets/images/mask-group-5.png'
    },
    {
      title: 'Staffing Service',
      description:
        'Our individuals are not just highly skilled but also align with your company’s aims and culture, ensuring a perfect fit for your team.',
      image: 'assets/images/mask-group-6.png'
    },
    {
      title: 'UI/UX Designing',
      description:
        'We fashion intuitive and visually appealing interfaces that provide a seamless user experience,ensuring your applications are both functional and engaging.',
      image: 'assets/images/ui-banner.png'
    },
    {
      title: 'Full Stack Development',
      description:
        'Our expert team designs and deploys both front-end and back-end solutions, assuring seamless integration and optimal performance across your entire application.',
      image: 'assets/images/mask-group-3.png'
    },
    {
      title: 'DevOps',
      description:
        'Our team specializes in streamlining development and operations to ensure faster, more reliable software delivery.',
      image: 'assets/images/ai-mask.png'
    }
  ];

  selectedService = this.services[0];

  selectService(service: ServiceItem) {
    this.selectedService = service;
  }
}
