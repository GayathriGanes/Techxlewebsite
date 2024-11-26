import { Component } from '@angular/core'; 
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})
export class UIComponent  {
  currentImage: string = "./assets/images/pen.png";
  imageArray:string[] = ["pen.png", "augmented-reality-integration-enhanced-interactive-experiences-digital-platforms_972075-45024-transformed 1.png", "app.png"];
  changeImage(panelNumber: number) {
    this.currentImage = './assets/images/'+this.imageArray[panelNumber-1];
  }
}


