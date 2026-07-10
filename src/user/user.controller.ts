import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorator';
import type { User } from '@prisma/client';


@Controller('user')
export class UserController {
    constructor(private userService:UserService){

    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/profile')
   async UserDetails(@GetUser('email') email:string){
    
    return this.userService.getUser(email);
    }
}
