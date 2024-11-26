import { Component} from '@angular/core'; 
@Component({
  selector: 'app-cloudapp',
  templateUrl: './cloudapp.component.html',
  styleUrl: './cloudapp.component.css'
})
export class CloudappComponent  {
  currentImage: string = "./assets/images/Group 10412.png"; // default image path
  imageArray:string[] = ["Group 10412.png", "image_1054-transformed 1.png", "cloud1.png", "cloud2.png"];
  changeImage(panelNumber: number) {
    this.currentImage = './assets/images/'+this.imageArray[panelNumber-1];
  }
}