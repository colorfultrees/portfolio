import { Component } from '@angular/core';
import { contactData } from 'src/models/contact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contact = contactData;
}
