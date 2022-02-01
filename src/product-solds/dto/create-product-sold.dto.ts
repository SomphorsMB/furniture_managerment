import { IsNotEmpty, IsNumberString, Min } from "class-validator"
import { Product } from "src/products/entities/product.entity"

export class CreateProductSoldDto {
    
    @IsNotEmpty()
    readonly seller:number

    @IsNotEmpty()
    readonly product: Product

    @IsNotEmpty()
    @IsNumberString()
    readonly unit:number
}
