import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes, RouteReuseStrategy, PreloadingStrategy } from '@angular/router';
import { AboutUsComponent } from './About Us/about-us.component';
import { ContactComponent } from './Contact/contact.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './Home/home.component';
import { ProfileComponent } from './Profile/profile.component';
import { CustomReuseStrategy } from './custom-reuse-strategy';
import { ProductsModule } from './Products/products.module';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { ProductResolver } from './Products/products-resolver';
import { ProductsComponent } from './Products/products.component';
import { ProductsGroupComponent } from './Products/products-group/products-group.component';
import { ProductDetailComponent } from './Products/product-detail/product-detail.component';
import { ProductsService } from './Products/products.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'products',
    loadChildren: 'app/Products/products.module#ProductsModule',
    resolve: { products: ProductResolver },
    data: { preload: true }
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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: false}),
    HttpModule,
    BrowserAnimationsModule

  ],
  providers: [
  { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
  { provide: PreloadingStrategy, useClass: SelectivePreloadingStrategy }, ProductResolver, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
