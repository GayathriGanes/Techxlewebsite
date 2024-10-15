import { Component,ViewChild,ElementRef} from '@angular/core';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  @ViewChild('container', { static:true }) container!: ElementRef;

  cards = [
    {
      name:"Krishna Suheendra",
      role:"Chairman,Founder & CEO",
      para:"We look forward to supercharging the next phase of our growth with optimism and confidence,ready to size the many opportunities ahead. Our growth strategy for the emerging digital future is built on five strategic objectives.",
      image: 'assets/images/mas.png',
      ima:'assets/logo/Linked in.png'
    },
    {
      name:"Durai Samy",
      role:"Chairman,Founder & CEO",
      para:"We look forward to supercharging the next phase of our growth with optimism and confidence,ready to size the many opportunities ahead. Our growth strategy for the emerging digital future is built on five strategic objectives.",
      image: 'assets/images/mas.png',
      ima:'assets/logo/Linked in.png'
    },

  ];  
  
  constructor() {}
  next() {
    const containerWidth = this.container.nativeElement.offsetWidth;
    this.container.nativeElement.scrollBy({ left: containerWidth+20, behavior: 'smooth' });
  }

  prev() {
    const containerWidth = this.container.nativeElement.offsetWidth;
    this.container.nativeElement.scrollBy({ left: -containerWidth-20, behavior: 'smooth' });
  }

}
