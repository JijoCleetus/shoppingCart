import { Injectable } from '@angular/core';
import { Product } from '../product.entity';

@Injectable()
export class ProductService {
    private products: Product[];

    constructor() {
        this.products = [
            { id: '1', name: 'pdt1', price: '100', photo: 'thumb1.jpg' }
        ]
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
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