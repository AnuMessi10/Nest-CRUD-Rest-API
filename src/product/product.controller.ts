import { Controller, Get, Param } from '@nestjs/common';
import { Product } from './@types';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productsService: ProductService) {}

    @Get()
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Product> {
        return this.productsService.findOne(id);
    }
}
