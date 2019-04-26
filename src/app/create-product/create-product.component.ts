import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public product:Product;
  public productForm:FormGroup;


  constructor(private formbuilder:FormBuilder) {
    // this.product = new Product('Mac',70000,'我家');
    this.productForm = this.formbuilder.group({
      name:[null,Validators.required],
      price:[null,[Validators.required,Validators.min(1)]],
      image:[null,Validators.required]
    });
  }
  createProduct(productForm){
    console.log('創造一個產品表單',productForm);
    console.log('創造一個產品',this.product);
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  get image() {
    return this.productForm.get('image');
  }

  onSubmit() {
    console.log('提交的表單為:', this.productForm.value);
  }
  ngOnInit() {

  }

}
