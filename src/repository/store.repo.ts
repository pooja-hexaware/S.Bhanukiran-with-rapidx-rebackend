import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store, StoreDocument } from 'src/schemas/store.schema';

@Injectable()
export class storeRepo {
    constructor(
        @InjectModel(Store.name)
        private readonly storeModel: Model<StoreDocument>) {}


    async findAll(): Promise<Store[]> {
        const res = await  this.storeModel.find();
        return res;
    }

    async findById(storeId: string): Promise<Store> {
        return this.storeModel.findById(storeId);
    }

}