import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProductSupplierDto {

    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsString()
    country: string;

    @IsOptional()
    logo: string;

}
