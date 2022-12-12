import { Model } from 'mongoose';
import { Items, ItemsDocument } from 'src/schemas/items.schema';
export declare class itemsRepo {
    private readonly storeModel;
    constructor(storeModel: Model<ItemsDocument>);
    findAll(): Promise<Items[]>;
    findById(itemId: string): Promise<Items>;
}
