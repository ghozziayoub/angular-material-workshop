import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  
  productsInCart : number ;

  constructor() { }
  
  ngOnInit() {
    this.productsInCart = 0 ;
  }

}
