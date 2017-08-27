import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../providers/products.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  public loading: boolean = true;
  public items: any[];

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.list().then((products: Product[]) => {
      setTimeout(() => {
        this.items = products;
        this.loading = false;
      }, 1 * 1000); // 1 segundo de delay
    });
  }

}
