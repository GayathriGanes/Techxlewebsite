import { Component,HostListener} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'] 
})
export class BannerComponent {
    isScrolled: boolean = false;    
    @HostListener('window:scroll', [])
      onWindowScroll(): void {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        if (scrollPosition > windowHeight / 9) {
          this.isScrolled = true;
        } else {
          this.isScrolled = false;
        }
      }   
}

