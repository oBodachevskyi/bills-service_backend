import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PayerController } from './payers.controller';
import { PayerService } from './payers.service';
import { PayerSchema, Payer } from './schemas/payer.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payer.name, schema: PayerSchema }]),
  ],
  providers: [PayerService],
  controllers: [PayerController],
})
export class PayerModule {}
