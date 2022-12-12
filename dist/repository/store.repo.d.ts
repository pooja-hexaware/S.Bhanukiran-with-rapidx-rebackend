import { Model } from 'mongoose';
import { Store, StoreDocument } from 'src/schemas/store.schema';
export declare class storeRepo {
    private readonly storeModel;
    constructor(storeModel: Model<StoreDocument>);
    findAll(): Promise<Store[]>;
    findById(storeId: string): Promise<Store>;
}
