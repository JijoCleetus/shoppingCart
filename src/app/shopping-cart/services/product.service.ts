import { Injectable } from '@angular/core';
import { Product } from '../product.entity';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {
    private products: Product[];
    public observableProducts = <BehaviorSubject<Product[]>>new BehaviorSubject([]);


    constructor() {
        this.products = [
            { id: '1', name: 'pdt1', price: '100', photo: 'thumb1.jpg' }
        ]
        // use this method to get the cart details for current user
        this.getCartDetails();
    }

    getCartDetails() {
        //add service call here and delete the below line
        this.observableProducts.next(Object.assign([], this.products));
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    addToCart(pdt: Product) {
        if (!this.isExists(pdt.id)) {
            this.products.push(pdt);
            this.observableProducts.next(Object.assign([], this.products));
            console.log("product added successfully");
        } else {
            console.log("product already added in the cart");
        }
    }

    private isExists(id: string) {
        let retVal: boolean = false;
        this.products.forEach((pdt) => {
            if (pdt.id === id) {
                retVal = true;
            } else {
                retVal = false;
            }
        })
        return retVal;
    }

    private getSelectedIndex(id: string) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                return i;
            }
        }
        return -1;
    }
}