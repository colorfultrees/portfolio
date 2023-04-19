import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageScrolled = false;

  @HostListener('window:scroll', []) onWindowScroll() {
    const header = document.getElementById('header') as HTMLDivElement;
    const verticalOffset: number =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    verticalOffset > 0 ? this.pageScrolled = true : this.pageScrolled = false;
  }
}
