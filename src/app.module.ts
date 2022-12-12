import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { sampleentityModule } from "./modules/sampleentity.module";
import {  storeModule } from './modules/store.module';
import {  itemsModule } from './modules/items.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
        sampleentityModule,
        storeModule,
        itemsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
