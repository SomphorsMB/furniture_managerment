import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { CreateProductSupplierDto } from './create-product-supplier.dto';

export class UpdateProductSupplierDto extends PartialType(CreateProductSupplierDto) {
    @IsNotEmpty()
    @MinLength(5)
    brand: string;

    @IsNotEmpty()
    @MinLength(5)
    country: string;

    @IsOptional()
    logo: string;

}
