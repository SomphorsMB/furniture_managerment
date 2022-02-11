import { IsNotEmpty, IsNumber, MinLength } from "class-validator";
import { Category } from "src/categories/entities/category.entity";

export class CreateProductDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    category: Category;

}
