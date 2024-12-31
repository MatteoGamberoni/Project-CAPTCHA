import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { CaptchaComponent } from 'angular-captcha';

import { BasicService } from './basic.service';

@Component({
  moduleId: module.id,
  selector: 'basic-form',
  templateUrl: 'basic.component.html',
  styleUrls: ['basic.component.css'],
  providers: [BasicService]
})
export class BasicComponent {

  /**
   * Captcha validation messages.
   */
  errorMessages: string;

  /**
   * BotDetect CAPTCHA component.
   */
  @ViewChild(CaptchaComponent) captchaComponent: CaptchaComponent;

  constructor(
    private basicService: BasicService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    // set the captchaEndpoint property to point to 
    // the captcha endpoint path on your app's backend
    this.captchaComponent.captchaEndpoint = 'botdetect-captcha-lib/simple-botdetect.php';
  }

  /**
   * Process the form on submit event.
   */
  validate(value, valid): void {

    // get the user-entered captcha code value to be validated at the backend side        
    let userEnteredCaptchaCode = this.captchaComponent.userEnteredCaptchaCode;
    
    // get the id of a captcha instance that the user tried to solve
    let captchaId = this.captchaComponent.captchaId;

    const postData = {
      // add the user-entered captcha code value to the post data    
      userEnteredCaptchaCode: userEnteredCaptchaCode,
      // add the id of a captcha instance to the post data      
      captchaId: captchaId
    };

    // post the captcha data to the backend
    this.basicService.send(postData)
      .subscribe(
        response => {
          if (response.success == false) {
            // captcha validation failed; show the error message
            this.errorMessages = 'CAPTCHA validation failed.';
            // call the this.captchaComponent.reloadImage()
            // in order to generate a new captcha challenge
            this.captchaComponent.reloadImage();
          } else {
            // captcha validation succeeded; proceed with the workflow
            this.router.navigate(['/basic-success-notify']) 
          }
        },
        error => {
          throw new Error(error);
        });
  }

}
