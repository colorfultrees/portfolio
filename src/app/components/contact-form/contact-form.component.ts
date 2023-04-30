import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  hasMailSent: boolean = false;


  /**
   * Processes the form data and clears the form
   * @param data - Data entered to the form
   * @param form - The form itself
   */
  async commitForm(data: any, form: NgForm) {
    await this.sendMail(data);
    // this.hasMailSent = true;
    setTimeout(() => {
      this.hasMailSent = false;
      form.resetForm();
    }, 4010);
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

        this.hasMailSent = true;
    }
    catch (err) {
      console.log(`Error during mail dispatch! (Error: ${err})`);
    }
  }
}
