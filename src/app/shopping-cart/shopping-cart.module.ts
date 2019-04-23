import { NgModule } from '@angular/core'
import { ShoppingCartComponent } from './shopping-cart.component';
import { ProductService } from './services/product.service';

@NgModule({
    declarations: [
        ShoppingCartComponent
    ],
    imports: [],
    exports: [
        ShoppingCartComponent
    ],
    providers: [
        ProductService
    ]

})

export class ShoppingCartModule {

}