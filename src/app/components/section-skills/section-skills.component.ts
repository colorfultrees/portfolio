import { Component } from '@angular/core';
import { skills } from 'src/models/skills';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent {
  skills = skills;
}
