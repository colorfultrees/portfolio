import { Component, HostListener } from '@angular/core';
import { ScrollService } from './shared/scroll.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private scrollService: ScrollService, private wowService: NgwWowService) {
    this.wowService.init();
  }

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
