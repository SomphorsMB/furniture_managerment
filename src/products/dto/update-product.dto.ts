import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @IsNotEmpty()
    @MinLength(5)
    name: string;

    @IsNotEmpty()
    @IsNumber()
    category_id: number;
}
