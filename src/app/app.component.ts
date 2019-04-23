import { Component } from '@angular/core';
import { ProductService } from './shopping-cart/services/product.service';
import { Product } from './shopping-cart/product.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Shopping Cart Component';

  constructor(private cartService: ProductService) {

  }
  addToCart() {
    console.log("clicked add to cart");
    let samplePdt: Product
    samplePdt = {
      id: "2",
      name: "pdt 2",
      price: '233',
      photo: "thumb2.jpg"
    }
    this.cartService.addToCart(samplePdt);
  }
}
