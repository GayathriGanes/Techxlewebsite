import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrl: './callout.component.css'
})
export class CalloutComponent {
  constructor(private router: Router) {}
  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
