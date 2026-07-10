import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private prisma:PrismaService,
        private jwt:JwtService,
        private config:ConfigService
    ){

    }
    
    async signin(dto:AuthDto) {
        const user = await this.prisma.user.findUnique({
            where:{
                email: dto.email
            }
        });

        if(!user){
            throw new ForbiddenException(
                "Email or Password incorrect"
            )
        }

        const pwMatches = await argon.verify(
            user.password,
            dto.password,
        );
       
        if(!pwMatches){
            throw new ForbiddenException(
                "Email or Password incorrect"
            )
        }

        return this.signToken(user.id,user.email);

    }


    async signup(dto:AuthDto) {
        try{
            const hash = await argon.hash(dto.password)
        const user = await this.prisma.user.create({
            data:{
                email:dto.email,
                password: hash
            },
            select:{
                id:true,
                email:true,
                createdAt:true
            }
        
        })

        return user;
        }catch(err){
            if(err instanceof PrismaClientKnownRequestError){
                if(err.code === 'P2002'){
                    throw new ForbiddenException('email already in use')
                }
            }
        }
       
    }

    async signToken(userId:number,email:string):Promise<{access_token:string}>{
        
        const data = {
            sub:userId,
            email
        }

        const token = await this.jwt.signAsync(data,{
            expiresIn:'1h',
            secret:this.config.get("TOKEN_SECRET")
        })

        return {
            access_token:token
        }
    }
}

