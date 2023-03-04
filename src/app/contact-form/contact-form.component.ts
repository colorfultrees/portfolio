import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @ViewChild('mailForm') mailForm!: ElementRef;
  @ViewChild('name') name: any;
  @ViewChild('email') email: any;
  @ViewChild('message') message: any;

  async commitForm() {
    const name = this.name.nativeElement;
    const email = this.email.nativeElement;
    const message = this.message.nativeElement;
    
    
    console.log('Mail senden ...', this.mailForm);
    console.log(`Eingabe: ${name.value}, ${email.value}, ${message.value}`);


    await this.sendMail(name, email, message);



    this.resetForm(name, email, message);
  }
  
  async sendMail(name: any, email: any, message: any) {
    let formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('message', message.value);
    await fetch (
      'https://christof-mark.developerakademie.net/portfolio/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    );
  }

  resetForm(name: any, email: any, message: any) {
    name.value = '';
    email.value = '';
    message.value = '';
  }
}
