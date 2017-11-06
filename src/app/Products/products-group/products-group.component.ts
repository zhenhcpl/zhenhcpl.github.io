import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductVO } from '../product.vo';

@Component({
  selector: 'products-group',
  templateUrl: './products-group.component.html',
  styleUrls: ['./products-group.component.css']
})
export class ProductsGroupComponent implements OnInit {

  @Input() products: Array<ProductVO>;
  @Input() category: String;

  expanded: Boolean = false;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() { }

  toggleExpansion() {
    this.expanded = !this.expanded;
  }

  setImageStyle() {
     if (this.expanded) {
       return {
         'background-image': 'url(assets/svg/chevron-down.svg)',
         'height': '1.1em',
         'width': '1em'
       };
     } else {
        return {
         'background-image': 'url(assets/svg/chevron-right.svg)',
         'height': '1.1em',
         'width': '.9em'
       };
     }
  }

}
