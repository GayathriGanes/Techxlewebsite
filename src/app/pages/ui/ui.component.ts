import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})
export class UIComponent {
  activeLink: string = '';
  constructor(private viewportScroller:ViewportScroller) {}

  setActiveLink(link: string) {
    this.activeLink = link;
  }
  scrollToContent(targetId:string) {
    this.viewportScroller.scrollToAnchor(targetId)
  }
}
