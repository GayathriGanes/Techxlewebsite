import { Component} from '@angular/core';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
 clients=[{imgSrc:'./assets/images/cl1.svg'},
          {imgSrc:'./assets/images/cl2.svg'},
          {imgSrc:'./assets/images/cl3.svg'},
          {imgSrc:'./assets/images/cl4.svg'}
 ];
}
