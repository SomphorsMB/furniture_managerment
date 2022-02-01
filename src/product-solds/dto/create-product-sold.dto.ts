import { IsNotEmpty, IsNumberString, Min } from "class-validator"
import { Product } from "src/products/entities/product.entity"
import { Seller } from "src/sellers/entities/seller.entity"

export class CreateProductSoldDto {
    
    @IsNotEmpty()
    readonly seller:Seller

    @IsNotEmpty()
    readonly product: Product

    @IsNotEmpty()
    @IsNumberString()
    readonly unit:number
}
