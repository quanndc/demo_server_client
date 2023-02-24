import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {

    products:Product[] = [
        {
            id: "1",
            title:"Gà giòn vui vẻ",
            description: "Chắc là không giòn đâu",
            photoURL: "https://jollibee.com.vn/uploads/dish/ee8e7512368728-6mingggin.png",
        },

        {
            id: "2",
            title:"Gà giòn vui vẻ",
            description: "Chắc là không giòn đâu",
            photoURL: "https://jollibee.com.vn/uploads/dish/ee8e7512368728-6mingggin.png",
        },

        {
            id: "3",
            title:"Gà giòn vui vẻ",
            description: "Chắc là không giòn đâu",
            photoURL: "https://jollibee.com.vn/uploads/dish/ee8e7512368728-6mingggin.png",
        },

        {
            id: "4",
            title:"Gà giòn vui vẻ",
            description: "Chắc là không giòn đâu",
            photoURL: "https://jollibee.com.vn/uploads/dish/ee8e7512368728-6mingggin.png",
        },

        {
            id: "5",
            title:"Gà giòn vui vẻ",
            description: "Chắc là không giòn đâu",
            photoURL: "https://jollibee.com.vn/uploads/dish/ee8e7512368728-6mingggin.png",
        },
    ];


    async getAllProduct(){
        // console.log(this.products);
        return {
            message: "Get all product successfully",
            data: this.products
        }
    }

    getProductById(id: string){
        const product = this.products.find(product => product.id === id);
        return {
            message: "Get product by id successfully",
            data: product
        }
    }

    createProduct(product: Product){
        this.products.push(product);
        return {
            message: "Create product successfully",
            data: this.products
        }
    }

    updateProduct(id:string,productToUpdate: Product){
        const index = this.products.findIndex(product => product.id === id);
        if(index !== -1){
            this.products[index] = productToUpdate;
            return {
                message: `Update product id ${id} successfully`,
                data: this.products
            };
        }
    }

    deleteProduct(id: string){
        const index = this.products.findIndex(product => product.id === id);
        if(index !== -1){
            this.products.splice(index, 1);
            return {
                message: `Delete product ${id} successfully`,
                data: this.products
            }
        }else{
            return {
                message: "Invalid product id",
            }
        }
    }
}


