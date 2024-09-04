import { Component,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-solutionban',
  templateUrl: './solutionban.component.html',
  styleUrl: './solutionban.component.css'
})
export class SolutionbanComponent {
card: any;
navigateTo(undefined: undefined) {
throw new Error('Method not implemented.');
}
  constructor(private rndr2: Renderer2) {}
  onDownButtonClick(){
    const solutionCardOnTopDiv = document.getElementById('solutionCardOnTop') as HTMLDivElement | null;
    this.rndr2.addClass(solutionCardOnTopDiv, 'solution-card-to-top');
  }

  /*onUpButtonClick(){
    const solutionCardOnTopDiv = document.getElementById('solutionCardOnTop') as HTMLDivElement | null;
    this.rndr2.removeClass(solutionCardOnTopDiv, 'solution-card-to-top');
    this.rndr2.addClass(solutionCardOnTopDiv, 'solution-card-to-bottom');
  }*/
}