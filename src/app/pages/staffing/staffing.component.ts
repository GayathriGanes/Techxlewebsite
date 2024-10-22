
import { Component, } from '@angular/core';

 
@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrl: './staffing.component.css'
})
export class StaffingComponent {
 
 
  currentImage: string = "./assets/images/man-holding-group-people-group-that-has-man-suit-man-suit-holding-white-shirt_1222383-13503-transformed 1.png"; // default image path
 
  changeImage(panelNumber: number) {
    switch (panelNumber) {
      case 1:
        this.currentImage = './assets/images/man-holding-group-people-group-that-has-man-suit-man-suit-holding-white-shirt_1222383-13503-transformed 1.png';
        break;
      case 2:
        this.currentImage = './assets/images/smiling-business-lady-working-with-colleagues 1.png';
        break;
      case 3:
        this.currentImage = './assets/images/index-finger-pressing-virtual-photo 1.png';
        break;
        case 4:
        this.currentImage = './assets/images/1-_rj_JJish-transformed 1.png';
        break;
      default:
        this.currentImage = './assets/images/capabilities.png';
    }
  }
}