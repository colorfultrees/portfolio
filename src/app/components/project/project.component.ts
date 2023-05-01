import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() projectItem: any;
  @Input() revers: boolean = false;

  MAX_WIDTH = 1200;


  /**
   * Getter to obtain the current window width
   */
  public get width() {
    return window.innerWidth;
  }
}
