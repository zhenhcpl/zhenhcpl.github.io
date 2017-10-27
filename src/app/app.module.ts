import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './About Us/about-us.component';
import { ContactComponent } from './Contact/contact.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

const appRoutes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
   {
    path: '',
    redirectTo: 'about-us',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
