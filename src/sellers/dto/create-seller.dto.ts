import { IsAlpha, IsMobilePhone, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateSellerDto {
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(100)
    readonly firstName:string;

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(100)
    readonly lastName:string;

    @IsNotEmpty()
    @IsAlpha()
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
