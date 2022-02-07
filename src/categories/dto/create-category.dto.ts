import { IsAlpha, IsNotEmpty, Max, MaxLength, MinLength } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(100)
    readonly name:string;
}
