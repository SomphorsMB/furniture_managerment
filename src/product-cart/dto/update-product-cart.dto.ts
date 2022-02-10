import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateProductCartDto } from './create-product-cart.dto';

export class UpdateProductCartDto extends PartialType(CreateProductCartDto) {}
