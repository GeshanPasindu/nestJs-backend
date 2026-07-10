import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma:PrismaService){

    }
   async getUser(email:string){
        const user = await this.prisma.user.findUnique({
            where:{
                email:email
            }
        })

        if(!user){
            throw new NotFoundException("User not found")
        }

       const { password, ...userRes } = user;
return userRes;
       
    }
}