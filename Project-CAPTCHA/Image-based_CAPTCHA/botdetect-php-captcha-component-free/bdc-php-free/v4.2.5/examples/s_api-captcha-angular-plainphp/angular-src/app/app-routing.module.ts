import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent }   from './basic/basic.component';
import { ContactComponent }   from './contact/contact.component';

import { BasicSuccessNotifyComponent }   from './notify/basic-notify/basic-success-notify.component';
import { ContactSuccessNotifyComponent }   from './notify/contact-notify/contact-success-notify.component';

const routes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: 'basic',  component: BasicComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'basic-success-notify',  component: BasicSuccessNotifyComponent },
  { path: 'contact-success-notify',  component: ContactSuccessNotifyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true } ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
