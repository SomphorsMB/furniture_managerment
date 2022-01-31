import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Role } from "src/authorization/role.enum";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsNotEmpty()
    role: Role[]
}
