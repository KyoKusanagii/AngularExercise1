import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() { }
  name = 'Nike球鞋';
  price = 2000;
  file = 'assets/nike.jpg';
  onsale = false;
  quality:number;
  toggleIsOnSale(){
    this.onsale = !this.onsale;
  }
  addQuality(){
    this.quality += 1;
  }
  reduceQuality(){
    this.quality -= 1;
  }

  ngOnInit() {
    this.quality = 1;
  }

}
