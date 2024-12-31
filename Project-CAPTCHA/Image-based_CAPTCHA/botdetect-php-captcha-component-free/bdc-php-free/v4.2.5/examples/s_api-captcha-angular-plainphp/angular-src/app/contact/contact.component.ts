import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { CaptchaComponent } from 'angular-captcha';

import { Contact } from './contact.interface';
import { ContactService } from './contact.service';

@Component({
  moduleId: module.id,
  selector: 'contact-form',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  
  contact: FormGroup;

  emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  /**
   * Captcha validation messages.
   */
  errorMessages: Object;
  successMessages: string;

  /**
   * BotDetect CAPTCHA component.
   */
  @ViewChild(CaptchaComponent) captchaComponent: CaptchaComponent;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    // set the captchaEndpoint property to point to 
    // the captcha endpoint path on your app's backend
    this.captchaComponent.captchaEndpoint = 'botdetect-captcha-lib/simple-botdetect.php';

    this.contact = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',  [Validators.required, Validators.pattern(this.emailRegex)]],
      subject: ['',  [Validators.required,Validators.minLength(10)]],
      message: ['',  [Validators.required,Validators.minLength(10)]],
      userCaptchaInput: [''] // we will validate user captcha input value at the backend side
    });
  }

  /**
   * Process the contact form on submit event.
   */
  send({ value, valid }: { value: Contact, valid: boolean }): void {

    if (valid) {

      // get the user-entered captcha code value to be validated at the backend side        
      let userEnteredCaptchaCode = this.captchaComponent.userEnteredCaptchaCode;
      
      // get the id of a captcha instance that the user tried to solve
      let captchaId = this.captchaComponent.captchaId;

      let postData = {
        name: value.name,
        email: value.email,
        subject: value.subject,
        message: value.message,
        // add the user-entered captcha code value to the post data    
        userEnteredCaptchaCode: userEnteredCaptchaCode,
        // add the id of a captcha instance to the post data      
        captchaId: captchaId
      };

      // post both the form-data and captcha data to the backend
      this.contactService.send(postData)
        .subscribe(
          response => {
            if (response.success == false) {
              // captcha validation failed; show the error message
              this.errorMessages = response.errors;
              // call the this.captchaComponent.reloadImage()
              // in order to generate a new captcha challenge
              this.captchaComponent.reloadImage();
            } else {
              // captcha validation succeeded; proceed with the workflow
              this.router.navigate(['/contact-success-notify']) 
            }
          },
          error => {
            throw new Error(error);
          });

    } else {
      this.errorMessages = { formInvalid: 'Please enter valid values.' }
    }

  }
}
