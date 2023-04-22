import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  pageScrolled = false;

  // @HostListener('window:scroll', []) onWindowScroll() {
  //   const header = document.getElementById('header') as HTMLDivElement;
  //   const verticalOffset: number =
  //       window.pageYOffset ||
  //       document.documentElement.scrollTop ||
  //       document.body.scrollTop ||
  //       0;
  //   verticalOffset > 0 ? this.pageScrolled = true : this.pageScrolled = false;
  // }
}
