import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() { }
  public name = 'Nike球鞋';
  public price = 2000;
  public file = 'assets/nike.jpg';
  public onsale = false;
  public quality:number;
  public classes;
  public numbers:Array<number>;

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
    this.numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    this.classes = {
      'isOnSale':this.onsale,
      'notOnSale':!this.onsale
    };
  }

}
