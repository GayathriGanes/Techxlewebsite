import { Component } from '@angular/core';
@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrl: './devops.component.css'
})
export class DevopsComponent {
  currentImage: string = "./assets/images/smiling-business-lady-working-with-colleagues 1.png"; // default image path
  imageArray:string[] = ["smiling-business-lady-working-with-colleagues 1.png", "222.png", "integration.png", "programming-background-with-person-working-with-codes-computer 1.png","image_1054-transformed 1.png"];
  changeImage(panelNumber: number) {
    this.currentImage = './assets/images/'+this.imageArray[panelNumber-1];
  }
}
