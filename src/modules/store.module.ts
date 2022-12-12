import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { storeController } from '../controllers/store.controller';
import { storeService } from '../services/store.service';
import { storeRepo } from '../repository/store.repo';
import { Store, StoreSchema } from '../schemas/store.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }])
    ],
    controllers: [storeController],
    providers: [storeService, storeRepo],
    exports: [storeService, storeRepo]
  })
  export class storeModule {}