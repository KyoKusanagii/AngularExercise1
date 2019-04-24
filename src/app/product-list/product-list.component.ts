import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() public products:Array<Product>;
  numbers;

  constructor() { }
  quality;

  addQuality(){
    this.quality += 1;
  }
  reduceQuality(){
    this.quality -= 1;
  }
  ngOnInit() {
    this.quality = 1;
    this.numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  }

}
