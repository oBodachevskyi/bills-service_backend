import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PayerDocument = Payer & Document;
@Schema()
export class Payer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string;
}

export const PayerSchema = SchemaFactory.createForClass(Payer);
