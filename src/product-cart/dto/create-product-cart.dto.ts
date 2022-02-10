import { IsNotEmpty } from "class-validator";
import { ProductDetail } from "src/product-details/entities/product-detail.entity";

export class CreateProductCartDto {

    @IsNotEmpty()
    readonly product: ProductDetail

    @IsNotEmpty()
    readonly unit: number
}
