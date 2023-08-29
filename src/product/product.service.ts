import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
    ) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct;
    }

    async findOne(id: string): Promise<Product> {
        const product = this.productModel.findById(id);
        return product;
    }

    async findAll(): Promise<Product[]> {
        const products = this.productModel.find().exec();
        return products;
    }
}
