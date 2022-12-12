import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { sampleentityController } from '../controllers/sampleentity.controller';
import { sampleentityService } from '../services/sampleentity.service';
import { sampleentityRepo } from '../repository/sampleentity.repo';
import { sampleentity, sampleentitySchema } from '../schemas/sampleentity.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: sampleentity.name, schema: sampleentitySchema }])
    ],
    controllers: [sampleentityController],
    providers: [sampleentityService, sampleentityRepo],
    exports: [sampleentityService, sampleentityRepo]
  })
  export class sampleentityModule { }