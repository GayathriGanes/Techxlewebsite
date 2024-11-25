import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent  {
  @Input() backgroundImage: string = '';
  @Input() breadcrumbText: string = '';
  @Input() breadcrumbLink: string = '';
  @Input() secondaryText: string = '';
  @Input() heading: string = '';
}
