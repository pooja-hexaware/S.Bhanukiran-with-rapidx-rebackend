import mongoose from "mongoose";
export declare class Store {
    storeId: number;
    name: string;
    menu: string[];
}
export declare type StoreDocument = Store & Document;
export declare const StoreSchema: mongoose.Schema<Store, mongoose.Model<Store, any, any, any, any>, {}, {}, {}, {}, "type", Store>;
