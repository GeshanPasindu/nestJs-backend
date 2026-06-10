import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(
        private prismaService:PrismaService
    ){
        super(
            {
                datasources:{
                    db:{
                        url:process.env.DATABASE_URL
                    }
                    
                }
            }
        )
    }
}
