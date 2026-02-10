import { Component } from '@angular/core';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.component.html',
  styleUrl: './driving.component.css'
})
export class DrivingComponent {
   activeTab = 'approach';

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
