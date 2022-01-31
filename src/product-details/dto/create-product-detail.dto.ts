import { IsAlpha, IsNotEmpty, IsNumberString, MinLength } from "class-validator";

export class CreateProductDetailDto {
    @IsNotEmpty()
    @IsNumberString()
    readonly product:number

    @IsNotEmpty()
    @IsNumberString()
    readonly productSupplier:number

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
    @IsAlpha()
    readonly rawMaterial:string;
    
    @IsNotEmpty()
    @IsNumberString()
    readonly price:number;
}
