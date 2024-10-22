
import {Component} from '@angular/core';

 
@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html',
  styleUrl: './fullstack.component.css'
})
export class FullstackComponent {

 
  currentImage: string = "./assets/images/Group 10412.png"; // default image path
 
  changeImage(panelNumber: number) {
    switch (panelNumber) {
      case 1:
        this.currentImage = './assets/images/Group 10412.png';
        break;
      case 2:
        this.currentImage = './assets/images/image_1054-transformed 1.png';
        break;
      case 3:
        this.currentImage = './assets/images/standard-quality-control-concept-m 1.png';
        break;
        case 4:
        this.currentImage = './assets/images/woman-scrolling-laptop 1.png';
        break;
      default:
        this.currentImage = './assets/images/capabilities.png';
    }
  }

}