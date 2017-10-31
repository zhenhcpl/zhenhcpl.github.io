
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsGroupComponent } from './products-group/products-group.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsService } from './products.service';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsGroupComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    HttpModule,
    CommonModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
