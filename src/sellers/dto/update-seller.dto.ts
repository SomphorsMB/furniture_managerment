import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerDto } from './create-seller.dto';
import { IsNotEmpty, IsNumberString, MaxLength, MinLength } from "class-validator";


export class UpdateSellerDto extends PartialType(CreateSellerDto) {
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
    firstName:string;

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
    lastName:string;

    @IsNotEmpty()
    gender:string;

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(9)
    @MaxLength(10)
    phone:string;
    
    @IsNotEmpty()
    @MinLength(10)
    address:string;

}
