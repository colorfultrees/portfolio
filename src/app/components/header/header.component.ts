import { Component, HostListener } from '@angular/core';
import { ScrollService } from 'src/app/shared/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileMenuActive = false;

  constructor(public scrollService: ScrollService) {}


  /**
   * Toggles the mobile menu
   */
  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}
