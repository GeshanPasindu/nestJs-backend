import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    
    signin() {
        return("test");
    }

    signup() {
        return ("test 2");
    }
}
