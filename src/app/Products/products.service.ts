import { Http, Response } from '@angular/http';
import { ProductsGroupVO } from './products-group.vo';
import { ProductVO } from './product.vo';
import {Injectable} from '@angular/core';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Rx';

@Injectable()

export class ProductsService {

    products: ProductsGroupVO;


    constructor(private http: Http) {

    }

    public getProducts(): Promise<any> {
        return this.http.get('assets/json/products.json').toPromise()
            .then((res: Response) => {
                this.products = new ProductsGroupVO();
                const data = res.json();
                this.products.capsules = data['capsules'];
                this.products.syrups = data['syrups'];
                this.products.tablets = data['tablets'];
                return this.products;
            })
            .catch(this.handleError);
    }

    private parseProductsArray(productsArray: Array<ProductVO>) {
    }


    handleError: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
        const res: any = <Response>errorResponse;
        const err: any = res.json();
        const emsg: String = err ?
            (err.error ? err.error : JSON.stringify(err)) :
            (res.statusText || 'unknown error');
        console.log(emsg);
        return Observable.of();
    }

}
