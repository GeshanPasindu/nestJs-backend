import { Body, Controller, Post } from '@nestjs/common';
import { PlatformsDto } from './dto';
import { PlatformsService } from './platforms.service';

@Controller('platforms')
export class PlatformsController {
    constructor( private platformsService:PlatformsService){
    }
    @Post('')
    create(@Body() platform:PlatformsDto){
        return this.platformsService.createPlatform(platform);
    }
}
