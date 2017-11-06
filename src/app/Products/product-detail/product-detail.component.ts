import { Component, Input, OnInit } from '@angular/core';
import { ProductVO } from '../product.vo';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: ProductVO;
  expanded: Boolean = false;

  headingId: String;
  collapseId: String;
  collapseHref: String;
  constructor() {
    this.headingId = this.guid();
    this.collapseId = this.guid();
    this.collapseHref = '#' + this.collapseId;
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  ngOnInit() {
    console.log('inside oninit' + this.product);
  }

  toggleExpansion() {
    this.expanded = !this.expanded;
  }

  setImageStyle() {
    if (this.expanded) {
      return {
        'background-image': 'url(assets/svg/dash.svg)',
        'height': '.9em',
        'width': '.9em'
      };
    } else {
      return {
        'background-image': 'url(assets/svg/plus.svg)',
        'height': '1.1em',
        'width': '.9em'
      };
    }
  }

}
