import { Component } from '@angular/core'; 
@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.css'
})
export class AiComponent {
  currentImage: string = "./assets/images/smiling-business-lady-working-with-colleagues 1.png"; // default image path
  imageArray:string[] = ["smiling-business-lady-working-with-colleagues 1.png", "busi1.png", "integration.png", "busi2.png","augmented-reality-integration-enhanced-interactive-experiences-digital-platforms_972075-45024-transformed 1.png"];
  changeImage(panelNumber: number) {
    this.currentImage = './assets/images/'+this.imageArray[panelNumber-1];
  }
}