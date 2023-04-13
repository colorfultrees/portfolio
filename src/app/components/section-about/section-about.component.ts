import { Component } from '@angular/core';
import { contactData } from 'src/models/contact';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss']
})
export class SectionAboutComponent {
  contact = contactData;
}
