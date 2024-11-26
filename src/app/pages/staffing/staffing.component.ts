import { Component } from '@angular/core';
@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrl: './staffing.component.css'
})
export class StaffingComponent {
  currentImage: string = "./assets/images/man-holding-group-people-group-that-has-man-suit-man-suit-holding-white-shirt_1222383-13503-transformed 1.png"; // default image path
    imageArray:string[] = ["man-holding-group-people-group-that-has-man-suit-man-suit-holding-white-shirt_1222383-13503-transformed 1.png",
       "smiling-business-lady-working-with-colleagues 1.png", "index-finger-pressing-virtual-photo 1.png", "1-_rj_JJish-transformed 1.png"];
    changeImage(panelNumber: number) {
      this.currentImage = './assets/images/'+this.imageArray[panelNumber-1];
    }
  }