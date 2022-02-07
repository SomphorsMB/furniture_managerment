import { IsAlpha, IsNotEmpty, IsNumberString, MinLength } from "class-validator";
import { ProductSupplier } from "src/product-suppliers/entities/product-supplier.entity";
import { Product } from "src/products/entities/product.entity";

export class CreateProductDetailDto {
    @IsNotEmpty()
    readonly product:Product

    @IsNotEmpty()
    readonly supplier:ProductSupplier

    avatar?:string;

    @IsNotEmpty()
    @MinLength(2)
    @IsAlpha()
    readonly size:string

    @IsNotEmpty()
    @IsNumberString()
    readonly unit:number;

    @IsNotEmpty()
    @MinLength(3)
    @IsAlpha()
    readonly color:string;

    @IsNotEmpty()
    @MinLength(2)
    readonly rawMaterial:string;

    @IsNotEmpty()
    @IsNumberString()
    readonly price:number;
}
