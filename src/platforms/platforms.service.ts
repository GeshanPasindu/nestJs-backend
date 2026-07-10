import { Injectable } from '@nestjs/common';
import { PlatformsDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlatformsService {
    constructor(private prisma:PrismaService){}
    async createPlatform (platform:PlatformsDto){
        const new_platform = await this.prisma.platform.create({
            data:{
                name:platform.title,
                Description:platform.description,
                Link:platform.link,
                userId:platform.userId
            }
        })

        return new_platform
    }
}
