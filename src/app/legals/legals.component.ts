import { Component } from '@angular/core';
import { contactData } from 'src/models/contact';

@Component({
  selector: 'app-legals',
  templateUrl: './legals.component.html',
  styleUrls: ['./legals.component.scss']
})
export class LegalsComponent {
  contact = contactData;
}
