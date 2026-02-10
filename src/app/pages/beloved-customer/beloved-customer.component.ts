import { Component } from '@angular/core';

@Component({
  selector: 'app-beloved-customer',
  templateUrl: './beloved-customer.component.html',
  styleUrl: './beloved-customer.component.css'
})
export class BelovedCustomerComponent {
  clients=[{imgSrc:'./assets/images/cl1.svg'},
          {imgSrc:'./assets/images/cl4.svg'},
          {imgSrc:'./assets/images/cl3.svg'},
          {imgSrc:'./assets/images/cl5.svg'},
          {imgSrc:'./assets/images/Federal Agencies.svg'}
 ];
}
