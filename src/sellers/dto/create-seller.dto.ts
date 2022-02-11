import { IsAlpha, IsMobilePhone, IsNotEmpty, IsNumberString, MaxLength, MinLength } from "class-validator";

export class CreateSellerDto {
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(100)
    readonly firstName:string;

    @IsNotEmpty()
    readonly lastName:string;

    @IsNotEmpty()
    @IsAlpha()
    readonly gender:string;

    @IsNotEmpty()
    @IsMobilePhone()
    readonly phone:string;

    @IsNotEmpty()
    readonly address:string;

}
