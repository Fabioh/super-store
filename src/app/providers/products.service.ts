import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// const products: Product[] = require('./products.json');
const BASEURL = window.location.href.substring(0, window.location.href.length - 1) ;

// import * as $ from 'jquery';
import * as _ from 'lodash';

@Injectable()
export class ProductsService {

  private BASEURL_API: string = window.location.href + 'assets/products.json';

  constructor(private http: Http) {  }

  /*
  public list() {
    return new Promise((resolve, reject) => {
      products.map((product, i) => {
        // título no-formato-de-slug
        product.titleSlug = _.kebabCase(product.name);
        // a rota deste produto
        product.route = '/products/' + product.titleSlug + '/' + product.id;
        // a url deste produto
        product.url = BASEURL + product.route;
      });
      resolve(products);
    });
  }
  */

  public listWithObservable(): Observable<Product[]> {
    return this.http.get(this.BASEURL_API)
      .map(
        (res: Response) => {
          return res.json().map(
            (product, i) => {
              return new Product(
                product.id,
                product.name,
                product.year,
                product.price,
                product.type,
                product.image,
                product.description,
                // título no-formato-de-slug
                _.kebabCase(product.name),
                // a rota deste produto
                '/products/' + product.titleSlug + '/' + product.id,
                // a url deste produto
                BASEURL + product.route
              );
            }
          );
        }
      );
  }

  scrollTop() {
    // $('html, body').animate({
    //   scrollTop: 0
    // }, 0);

    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }
}
