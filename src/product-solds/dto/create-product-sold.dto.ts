import { IsNotEmpty, IsNumberString, Min } from "class-validator"

export class CreateProductSoldDto {
    
    @IsNotEmpty()
    @IsNumberString()
    readonly seller:number

    @IsNotEmpty()
    @IsNumberString()
    readonly product:number

    @IsNotEmpty()
    @IsNumberString()
    readonly unit:number
}
