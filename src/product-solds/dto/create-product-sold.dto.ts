import { IsNotEmpty, IsNumberString, Min } from "class-validator"

export class CreateProductSoldDto {
    
    @IsNotEmpty()
    @IsNumberString()
    seller:number

    @IsNotEmpty()
    @IsNumberString()
    product:number

    @IsNotEmpty()
    @IsNumberString()
    unit:number
}
