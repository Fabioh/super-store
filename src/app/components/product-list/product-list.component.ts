import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../providers/products.service';
import { Product } from '../../model/product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  public items: Observable<Product[]>;

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    setTimeout(() => {
      this.items = this.productsService.listWithObservable();
    }, 5 * 1000);
  }
}
