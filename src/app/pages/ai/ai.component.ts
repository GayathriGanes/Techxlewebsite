import { Component } from '@angular/core';

 
@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.css'
})
export class AiComponent  {
 

 
  currentImage: string = "./assets/images/turned-gray-laptop-computer 1.png"; // default image path
 
  changeImage(panelNumber: number) {
    switch (panelNumber) {
      case 1:
        this.currentImage = './assets/images/turned-gray-laptop-computer 1.png';
        break;
      case 2:
        this.currentImage = './assets/images/programming-background-with-person-working-with-codes-computer (1) 1.png';
        break;
      case 3:
        this.currentImage = './assets/images/repairman-doing-annual-system-servicing 1.png';
        break;
        case 4:
        this.currentImage = './assets/images/application-programming-interface-hologram (1) 1.png';
        break;
        case 5:
        this.currentImage = './assets/images/image_1054-transformed 1.png';
        break;
      default:
        this.currentImage = './assets/images/capabilities.png';
    }
  }

}