import { Injectable } from '@nestjs/common/decorators';
import { InjectModel } from '@nestjs/mongoose';
import { Payer } from './schemas/payer.schemas';

@Injectable()
export class PayerService {
  constructor(@InjectModel(Payer.name) private payerModel) {}

  async findAll(): Promise<Payer[]> {
    return this.payerModel.find().exec();
  }
}
