import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
    name: string;
}
