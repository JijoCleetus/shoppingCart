import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})
export class ShoppingCartComponent implements OnInit {

  cartItem: number;
  private subscription: Subscription;

  constructor(private cartService: ProductService) {
  }

  ngOnInit() {
    this.subscription = this.cartService.observableProducts
      .subscribe(item => {
        this.cartItem = item.length;
      }
      )
  }

}
