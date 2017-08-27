import { Injectable } from '@angular/core';
import { Product } from '../model/product';

const products: Product[] = require('./products.json');
const BASEURL = window.location.href.substring(0, window.location.href.length - 1) ;

// import * as $ from 'jquery';
import * as _ from 'lodash';

@Injectable()
export class ProductsService {

  constructor() {

  }

  list() {
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

  scrollTop() {
    // $('html, body').animate({
    //   scrollTop: 0
    // }, 0);

    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }
}
