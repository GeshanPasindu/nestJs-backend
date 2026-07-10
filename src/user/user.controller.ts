import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){

    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/profile')
   async UserDetails(@Request() req){
    const email = req.user.email;
    return this.userService.getUser(email);
    }
}
