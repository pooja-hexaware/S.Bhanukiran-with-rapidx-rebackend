import mongoose from "mongoose";
export declare class Items {
    name: string;
    price: number;
    ingredients: string;
    toppings: string[];
}
export declare type ItemsDocument = Items & Document;
export declare const ItemsSchema: mongoose.Schema<Items, mongoose.Model<Items, any, any, any, any>, {}, {}, {}, {}, "type", Items>;
