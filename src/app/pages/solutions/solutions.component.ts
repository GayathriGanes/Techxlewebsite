import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
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


