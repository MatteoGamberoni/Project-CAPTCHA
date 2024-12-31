import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { BotDetectCaptchaModule } from 'angular-captcha';

import { AppComponent } from './app.component';
import { BasicComponent }   from './basic/basic.component';
import { ContactComponent }   from './contact/contact.component';

import { BasicSuccessNotifyComponent }   from './notify/basic-notify/basic-success-notify.component';
import { ContactSuccessNotifyComponent }   from './notify/contact-notify/contact-success-notify.component';

import { ValuesPipe } from './values.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ContactComponent,
    ValuesPipe,
    BasicSuccessNotifyComponent,
    ContactSuccessNotifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // import the Angular Captcha Module
    BotDetectCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
