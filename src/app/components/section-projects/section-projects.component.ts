import { Component, OnInit } from '@angular/core';
import { projects } from 'src/models/projects';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent {
  prList = projects;
}
