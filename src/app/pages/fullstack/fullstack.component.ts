import { Component } from '@angular/core';
@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html',
  styleUrl: './fullstack.component.css'
})
export class FullstackComponent  {
  currentImage: string = "./assets/images/turned-gray-laptop-computer 1.png"; // default image path
  imageArray:string[] = ["turned-gray-laptop-computer 1.png", "programming-background-with-person-working-with-codes-computer (1) 1.png", "repairman-doing-annual-system-servicing 1.png", "application-programming-interface-hologram (1) 1.png","image_1054-transformed 1.png"];
  changeImage(panelNumber: number) {
    this.currentImage = './assets/images/'+this.imageArray[panelNumber-1];
  }
}