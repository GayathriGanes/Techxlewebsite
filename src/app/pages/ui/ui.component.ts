import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import{MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})
export class UIComponent {
  title: any;
  i: any;
  isOpen: any;
accordionItems: any;
  toggle(arg0: any) {
    throw new Error('Method not implemented.');
  }
  activeLink: string = '';
  constructor(private viewportScroller: ViewportScroller) {}

  setActiveLink(link: string) {
    this.activeLink = link;
  }
  scrollToContent(targetId: string) {
    this.viewportScroller.scrollToAnchor(targetId);
  }
}
