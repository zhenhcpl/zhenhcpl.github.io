import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/Router';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ProductVO } from './product.vo';
import { ProductsGroupVO } from './products-group.vo';
import { ProductsService } from './products.service';

@Injectable()

export class ProductResolver implements Resolve<ProductsGroupVO> {
    constructor(private productsService: ProductsService) {}
     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     Observable<ProductsGroupVO> | Promise<ProductsGroupVO> | ProductsGroupVO {
         console.log('fetching players in resolve');
         return this.productsService.getProducts();
     }
}
