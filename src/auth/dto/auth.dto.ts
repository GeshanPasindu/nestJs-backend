import { IsEmail, IsNotEmpty, IsString, Max, Min, MinLength } from "class-validator"

export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email!: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password!:string
}