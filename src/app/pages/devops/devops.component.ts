import { Component } from '@angular/core';


@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrl: './devops.component.css'
})
export class DevopsComponent {
  
 
  currentImage: string = './assets/images/smiling-business-lady-working-with-colleagues 1.png'; // default image path
 
  changeImage(panelNumber: number) {
    switch (panelNumber) {
      case 1:
        this.currentImage = './assets/images/smiling-business-lady-working-with-colleagues 1.png';
        break;
      case 2:
        this.currentImage = './assets/images/222.png';
        break;
      case 3:
        this.currentImage = './assets/images/integration.png';
        break;
        case 4:
        this.currentImage = './assets/images/programming-background-with-person-working-with-codes-computer 1.png';
        break;
        case 5:
        this.currentImage = './assets/images/image_1054-transformed 1.png';
        break;
      default:
        this.currentImage = './assets/images/capabilities.png';
    }
  }

}
