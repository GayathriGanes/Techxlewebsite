import { Component} from '@angular/core';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})
export class UIComponent  {

 
  currentImage: string = "./assets/images/pen.png"; 
 
  changeImage(panelNumber: number) {
    switch (panelNumber) {
      case 1:
        this.currentImage = './assets/images/pen.png';
        break;
      case 2:
        this.currentImage = './assets/images/augmented-reality-integration-enhanced-interactive-experiences-digital-platforms_972075-45024-transformed 1.png';
        break;
      case 3:
        this.currentImage = './assets/images/app.png';
        break;
      default:
        this.currentImage = './assets/images/capabilities.png';
    }
  }

}


