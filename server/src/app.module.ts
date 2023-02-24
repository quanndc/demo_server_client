import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductService } from './products/services/product/product.service';
import { ProductController } from './products/controllers/product/product.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
