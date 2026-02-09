import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit, OnDestroy {

  slides = [
    {
      index: '01',
      title: 'Transforming Healthcare & Enterprise with AI-Powered Technology',
      description: 'We help healthcare and enterprise organizations work smarter and move faster with AI-driven technology and modern digital platforms.',
      image: 'assets/images/carousel-1.png'
    },
    {
      index: '02',
      title: 'Specialized AI consulting delivering transformative business solutions',
      description: 'Client Centered. Associate Focused. Collaborative Minded.',
      image: 'assets/images/carousel2.png'
    },
    {
      index: '03',
      title: 'Shaping The Future of Healthcare with Advanced Technologies',
      description: 'Client Centered. Associate Focused. Collaborative Minded.',
      image: 'assets/images/carousel3.png'
    }
  ];

  activeSlide = 0;
  private intervalId: any;
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.intervalId = setInterval(() => {
        this.activeSlide = (this.activeSlide + 1) % this.slides.length;
      }, 4000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setSlide(index: number): void {
    this.activeSlide = index;
  }
}
