import { Prop, Schema, SchemaFactory,} from "@nestjs/mongoose";

@Schema()
export class Toppings{

    @Prop({required:true})
    name:string;

    @Prop({required:true})
    price:number;

}

export type ToppingsDocument= Toppings &Document;

export const ToppingsSchema=SchemaFactory.createForClass(Toppings);
