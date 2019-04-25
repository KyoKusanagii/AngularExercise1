import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public product:Product;

  constructor() {
    this.product = new Product('Mac',70000,'我家');
  }
  createProduct(productForm){
    console.log('創造一個產品表單',productForm);
    console.log('創造一個產品',this.product);
  }
  ngOnInit() {
  }

}
