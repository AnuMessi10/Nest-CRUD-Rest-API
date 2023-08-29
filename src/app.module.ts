import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
    imports: [
        ProductModule,
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async () => ({
                uri: 'mongodb://localhost:27017/nest',
            }),
        }),
    ],
})
export class AppModule {}
