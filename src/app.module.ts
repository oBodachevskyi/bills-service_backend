import { Module } from '@nestjs/common';
import { GameModule } from './games/games.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PayerModule } from './payers/payers.module';
import { BillModule } from './bills/bills.module';
import { DB_HOST } from './serviceDB';

@Module({
  imports: [
    GameModule,
    PayerModule,
    BillModule,
    MongooseModule.forRoot(DB_HOST),
  ],
})
export class AppModule {}
