import { IsNotEmpty, IsNumber } from "class-validator"
import { ProductDetail } from "src/product-details/entities/product-detail.entity"

export class CreateDiscountDto {

    @IsNotEmpty()
    readonly product: ProductDetail

    @IsNotEmpty()
    @IsNumber()
    readonly discount:number

    @IsNotEmpty()
    readonly start_at:Date

    @IsNotEmpty()
    readonly end_at:Date
}
