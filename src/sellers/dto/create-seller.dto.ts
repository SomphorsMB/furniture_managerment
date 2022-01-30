import { IsNotEmpty, IsNumberString, MaxLength, MinLength } from "class-validator";

export class CreateSellerDto {
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
