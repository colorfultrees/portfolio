import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from './shared/scroll.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    /**
     * Initiates the on-scroll animation library
     */
    AOS.init(
      {
        offset: 100,
        once: true,
        disable: 'phone'
      }
    );
  }


  /**
   * Listener for scroll event
   */
  @HostListener('window:scroll', []) onWindowScroll() {
    const header = document.getElementById('header') as HTMLDivElement;
    const verticalOffset: number =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    verticalOffset > 0 ? this.scrollService.pageScrolled = true : this.scrollService.pageScrolled = false;
  }
}
