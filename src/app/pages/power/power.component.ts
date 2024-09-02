import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrl: './power.component.css'
})
export class PowerComponent {
  constructor(private router: Router) {}

  navigateToSolutions() {
    this.router.navigate(['/solutions']); // Adjust the path as needed
  }
}
