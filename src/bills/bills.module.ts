import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillService } from './bills.service';
import { Bill, BillSchema } from './schemas/bill.schema';
import { BillController } from './bills.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bill.name, schema: BillSchema }]),
  ],
  providers: [BillService],
  controllers: [BillController],
})
export class BillModule {}
