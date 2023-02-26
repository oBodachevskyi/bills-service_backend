import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Payer } from 'src/payers/schemas/payer.schemas';
import { Game } from '../../games/schemas/game.schema';

export type BillDocument = Bill & Document;
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Bill {
  @Prop({ unique: true })
  number: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Game' })
  game: Game;

  @Prop({ default: false })
  isPaid: boolean;

  @Prop()
  datePaid: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Payer' })
  payer: Payer;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  currency: string;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
