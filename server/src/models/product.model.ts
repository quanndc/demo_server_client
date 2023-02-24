import { IsEmail, IsNotEmpty } from "class-validator";
export class Product{
    
    @IsNotEmpty()
    id: string;
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    photoURL: string;
}