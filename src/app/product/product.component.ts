import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  private keyword:string;

  private titleFilter:FormControl = new FormControl();

  private imgUrl = 'http://placehold.it/300x200/ffcf00';

  constructor(private productService: ProductService) { 
    this.titleFilter.valueChanges
    .subscribe(
      value => this.keyword = value
    )
  }

  ngOnInit() {

    this.products = this.productService.getProducts();
  }

}


