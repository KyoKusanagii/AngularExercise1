import {Component, OnInit} from '@angular/core';
import {Product} from "./model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public products:Array<Product>;
  title = 'AngularExercise1';

  ngOnInit(): void {
      this.products = [
      new Product('Nike球鞋',2500,'assets/nike.jpg'),
      new Product('iPhoneXR',23000,'assets/iphone.png'),
    ];
  }
}
