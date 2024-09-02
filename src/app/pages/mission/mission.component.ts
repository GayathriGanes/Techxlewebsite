import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent {
  activeContent: string = 'bac-1-content';
  expandedContent: string | null = 'bac-1-content';
  lockedContent: boolean = false;
  hoveredContent: string | null = null;

  handleMouseOver(contentClass: string) {
    if (!this.lockedContent) {
      this.activeContent = contentClass;
      this.hoveredContent = contentClass;
    }
  }

  handleMouseOut() {
    if (!this.lockedContent) {
      this.activeContent = 'bac-1-content';
      this.hoveredContent = null;
    }
  }

  handleClick(contentClass: string) {
    if (this.lockedContent && this.expandedContent === contentClass) {
      // If clicking on the already locked content, unlock it
      this.lockedContent = false;
      this.expandedContent = null;
      this.activeContent = 'bac-1-content';
    } else {
      // Lock the clicked content
      this.activeContent = contentClass;
      this.expandedContent = contentClass;
      this.lockedContent = true;
    }
  }
}
