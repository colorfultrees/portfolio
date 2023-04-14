import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  // @ViewChild('mailForm') mailForm!: ElementRef;
  // @ViewChild('name') name: any;
  // @ViewChild('email') email: any;
  // @ViewChild('message') message: any;


  /**
   * Processes the form data and clears the form
   * @param data - Data entered to the form
   * @param form - The form itself
   */
  async commitForm(data: any, form: NgForm) {
    // const name = this.name.nativeElement;
    // const email = this.email.nativeElement;
    // const message = this.message.nativeElement;
    
    
    // console.log('Mail senden ...', this.mailForm);
    console.log('Data from form:', data);
    console.log(`name: ${data.name}, email: ${data.email}, message: ${data.message}`);
    // console.log(`Eingabe: ${name.value}, ${email.value}, ${message.value}`);


    await this.sendMail(data);



    // this.resetForm(name, email, message);
    form.resetForm();
  }
  

  /**
   * Triggers the email
   * @param data - Data entered to the form
   */
  async sendMail(data: any) {
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    try {
        const response = await fetch (
          'https://christof-mark.developerakademie.net/portfolio/send_mail.php',
          {
            method: 'POST',
            body: formData
          }
        );

        if (!response.ok) {
          throw new Error(`Sorry, the email could not be sent! (Error: ${response.status})`);
        }

        console.log('Email successfully sent.'); // TODO: show pop-up w/ confirmation
    }
    catch (err) {
      console.log(`Oops, something went wrong! (Error: ${err})`);
    }
  }

  // resetForm(name: any, email: any, message: any) {
  //   name.value = '';
  //   email.value = '';
  //   message.value = '';
  // }
}
