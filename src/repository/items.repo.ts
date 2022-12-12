import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Items, ItemsDocument } from 'src/schemas/items.schema';

@Injectable()
export class itemsRepo {
    constructor(
        @InjectModel(Items.name)
        private readonly storeModel: Model<ItemsDocument>) {}


    async findAll(): Promise<Items[]> {
        const res = await  this.storeModel.find();
        return res;
    }

    async findById(itemId: string): Promise<Items> {
        return this.storeModel.findById(itemId);
    }

}