import { IsMobilePhone, IsNotEmpty, IsNumberString, MaxLength, MinLength } from "class-validator";

export class CreateSellerDto {
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
    readonly firstName:string;

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
    readonly lastName:string;

    @IsNotEmpty()
    readonly gender:string;

    @IsNotEmpty()
    @MinLength(9)
    @MaxLength(10)
    @IsMobilePhone()
    readonly phone:string;
    
    @IsNotEmpty()
    @MinLength(10)
    readonly address:string;

}
