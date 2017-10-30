import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { AboutUsComponent } from './About Us/about-us.component';
import { ContactComponent } from './Contact/contact.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './Home/home.component';
import { ProductsComponent } from './Products/products.component';
import { ProfileComponent } from './Profile/profile.component';
import { CustomReuseStrategy } from './custom-reuse-strategy';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
  {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
