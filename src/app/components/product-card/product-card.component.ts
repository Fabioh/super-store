import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  // declarando uma váriavel objeto do tipo any que irá armazenar o produto assim que for resolvido pelo provider mais a frente
  @Input() public product: any = {};
  @Input() public view: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
