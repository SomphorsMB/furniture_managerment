import { IsNotEmpty, IsNumber, MinLength } from "class-validator";
import { Category } from "src/categories/entities/category.entity";

export class CreateProductDto {

    @IsNotEmpty()
    @MinLength(5)
    name: string;

    @IsNotEmpty()
    // @IsNumber()
    category_id: Category;

}
