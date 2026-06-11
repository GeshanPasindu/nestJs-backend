import { IsEmail, IsNotEmpty, IsString, Max, Min } from "class-validator"

export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email!:string;
    
    @IsString()
    @IsNotEmpty()
    // @Min(8)
    password!:string
}