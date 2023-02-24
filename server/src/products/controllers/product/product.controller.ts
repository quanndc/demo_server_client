import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Product } from 'src/models/product.model';
import { ProductService } from 'src/products/services/product/product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Get('getAll')
    getAllProduct(){
        return this.productService.getAllProduct();
    }

    @Get('/:id')
    getProductById(@Param('id') id: string){
        return this.productService.getProductById(id);
    }

    @Post('create')
    createProduct(@Body() product: Product){
        return this.productService.createProduct(product);
    }

    @Put('update/:id')
    updateProduct(@Param('id') id: string, @Body() product: Product){
        // await console.log(product, id);
        return this.productService.updateProduct(id, product);
    }

    @Delete('delete/:id')
    deleteProduct(@Param('id') id: string){
        return this.productService.deleteProduct(id);
    }
}
