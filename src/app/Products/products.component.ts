import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductsGroupVO } from './products-group.vo';
import { OnInit } from '@angular/core';
@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: ProductsGroupVO;

  constructor( private productsService: ProductsService) {

  }

  ngOnInit() {
    this.productsService.getProducts().then(data => {
      this.products = data;
    });
  }

}
