import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/models/projects';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent {
  projects: Projects = new Projects;
}
