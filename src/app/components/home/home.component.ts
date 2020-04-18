import { Component, OnInit } from '@angular/core';
import { productsList } from '../../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = productsList;
  productsInCart : number ;

  constructor() { }
  
  ngOnInit() {
    this.productsInCart = 0 ;
  }
  
  addToCart(){
    this.productsInCart++;    
  }


}
