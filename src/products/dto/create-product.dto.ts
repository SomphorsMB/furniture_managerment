import { IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @MinLength(5)
    name: string;

    @IsNotEmpty()
    @IsNumber()
    category_id: number;

}
