import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
@Schema()
export class Store{

    @Prop({required:true})
    storeId:number;

    @Prop({required:true})
    name:string;

    @Prop()
    menu:string[];

}

export type StoreDocument= Store &Document;

export const StoreSchema=SchemaFactory.createForClass(Store);