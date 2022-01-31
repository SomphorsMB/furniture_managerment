import { IsNotEmpty, IsNumber, MinLength } from "class-validator";


export class CreateProductDetailDto {
    @IsNotEmpty()
    @IsNumber()
    product_id: number;

    @IsNotEmpty()
    @IsNumber()
    product_supplier_id: number;

    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    @IsNumber()
    unit: number;

    @IsNotEmpty()
    color: string;

    @IsNotEmpty()
    @MinLength(5)
    raw_materials: string;

    @IsNotEmpty()
    price: string;
}
