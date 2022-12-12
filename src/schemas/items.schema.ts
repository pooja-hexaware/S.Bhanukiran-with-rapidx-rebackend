import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Items{

    @Prop({required:true})
    name:string;
    
    @Prop({required:true})
    price:number;

    @Prop({required:true})
    ingredients:string;

    @Prop({ type: mongoose.Types.ObjectId, ref:'toppings'})
    toppings:string[];

}

export type ItemsDocument= Items &Document;

export const ItemsSchema=SchemaFactory.createForClass(Items);
