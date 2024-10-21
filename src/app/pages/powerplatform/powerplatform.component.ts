import { Component } from '@angular/core';

@Component({
  selector: 'app-powerplatform',
  templateUrl: './powerplatform.component.html',
  styleUrl: './powerplatform.component.css'
})
export class PowerplatformComponent {
  currentImage: string = "./assets/images/app.png"; // default image path
  imageArray:string[] = ["app.png", "process.png", "data.png", "integration.png", "capabilities.png"];

  changeImage(panelNumber: number) {
    this.currentImage = './assets/images/'+this.imageArray[panelNumber-1];
  }


}
