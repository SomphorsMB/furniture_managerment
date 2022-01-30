import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerDto } from './create-seller.dto';
import { IsNotEmpty, IsNumberString, MaxLength, MinLength } from "class-validator";


export class UpdateSellerDto extends PartialType(CreateSellerDto) {}
