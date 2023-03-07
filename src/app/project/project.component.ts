import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() technologies: string[] = [];
  @Input() imgUrl: string = '';
  @Input() imgAltTxt: string = '';
  @Input() revers: boolean = false;
}
