import { IsAlpha, IsNotEmpty, Max, MaxLength, MinLength } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    readonly name:string;
}
