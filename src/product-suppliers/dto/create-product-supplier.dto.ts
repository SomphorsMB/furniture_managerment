import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProductSupplierDto {
    
    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    brand: string;


    @MinLength(5)
    @IsString()
    country: string;

    @IsOptional()
    logo: string;
    
}
