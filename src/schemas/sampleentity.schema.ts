import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type sampleentityDocument = sampleentity & Document;

@Schema()
export class sampleentity {
   
   @Prop()
   name: string; 
   
   @Prop()
   idno: string; 
   
   @Prop()
   email: string; 
   
   @Prop()
   mobile: string; 
   
   @Prop()
   address: string; 
   
}

export const sampleentitySchema = SchemaFactory.createForClass(sampleentity);