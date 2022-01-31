import { IsAlpha, IsNotEmpty, Max, MaxLength, MinLength } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
    @IsAlpha()
    readonly name:string;
}
