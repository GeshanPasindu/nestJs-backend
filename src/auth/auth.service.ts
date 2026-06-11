import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma:PrismaService
    ){

    }
    
    signin() {
       
    }


    async signup(dto:AuthDto) {
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
    }
}
