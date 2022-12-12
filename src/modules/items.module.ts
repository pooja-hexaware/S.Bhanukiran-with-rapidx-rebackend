import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { itemsController } from '../controllers/items.controller';
import { itemsService } from '../services/items.service';
import { itemsRepo } from '../repository/items.repo';
import { Items, ItemsSchema } from '../schemas/items.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Items.name, schema: ItemsSchema }])
    ],
    controllers: [itemsController],
    providers: [itemsService, itemsRepo],
    exports: [itemsService, itemsRepo]
  })
  export class itemsModule {}