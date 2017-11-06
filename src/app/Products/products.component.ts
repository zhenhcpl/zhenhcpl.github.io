import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductsGroupVO } from './products-group.vo';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: ProductsGroupVO;

  constructor(private activateRoute: ActivatedRoute) {
    console.log('inside products component');
  }

  ngOnInit() {
    this.activateRoute.data.subscribe(data => {
      console.log('data received');
      this.products = data.products;
    });
  }

}
