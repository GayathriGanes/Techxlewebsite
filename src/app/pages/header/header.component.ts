import { Component} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isNavbarCollapsed = true;
  selectedLink: string = '';
  activeDropdownItem: string = '';
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  closeNavbar() {
    this.isNavbarCollapsed = true;
  }
  selectLink(link: string) {
    this.selectedLink = link; 
  }
  selectDropdownItem(item: string): void {
    this.activeDropdownItem = item;
  }
}
 
