import { IsNotEmpty } from "class-validator";

export class PlatformsDto{

    @IsNotEmpty()
    title!: string

    @IsNotEmpty()
    link!:string

    description!:string
    
    @IsNotEmpty()
    userId!:number
}