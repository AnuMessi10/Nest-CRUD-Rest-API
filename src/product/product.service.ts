import { Injectable } from '@nestjs/common';
import { Product } from './@types';

@Injectable()
export class ProductService {
    private products: Product[] = [
        {
            name: 'Product 1',
            id: '2111',
            description: 'Product 1 description',
            price: 200,
            quantity: 50,
        },
        {
            name: 'Product 2',
            id: '2315',
            description: "Product 2's description",
            price: 700,
            quantity: 90,
        },
    ];

    async findAll(): Promise<Product[]> {
        return this.products;
    }

    async findOne(id: Product['id']): Promise<Product> {
        const product = this.products.find((product) => product.id === id);
        return product;
    }

    async delete(id: Product['id']): Promise<void> {
        this.products = this.products.filter((product) => product.id === id);
    }

    async create(product: Product): Promise<Product> {
        this.products.push(product);
        return product;
    }
}
