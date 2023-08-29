import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<Product>,
    ) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    async findOne(id: string): Promise<Product> {
        const product = this.productModel.findById(id).exec();
        return product;
    }

    async findAll(): Promise<Product[]> {
        const products = this.productModel.find().exec();
        return products;
    }

    async delete(id: string): Promise<boolean> {
        const doesProductExist = !!this.findOne(id);
        if (doesProductExist) this.productModel.findByIdAndDelete(id).exec();
        return doesProductExist;
    }

    async update(
        id: string,
        updateProductDto: UpdateProductDto,
    ): Promise<Product> {
        this.productModel.findByIdAndUpdate(id, updateProductDto).exec();
        return this.findOne(id);
    }
}
