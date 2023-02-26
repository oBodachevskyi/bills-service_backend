import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const shortid = require('shortid');
import {
  CreateBillDto,
  SearchBillsDto,
  UpdateBillPayment,
} from './dto/billsOperationsType.dto';
import { Bill } from './schemas/bill.schema';

@Injectable()
export class BillService {
  constructor(@InjectModel(Bill.name) private billModel) {}

  async findAll(params: SearchBillsDto): Promise<SearchBillsDto> {
    return this.billModel
      .find(params)
      .populate('game', 'id, name')
      .populate('payer', 'id, name');
  }

  async create(billDto: CreateBillDto): Promise<CreateBillDto> {
    billDto.number = shortid.generate();
    const newBill = new this.billModel(billDto);
    return newBill.save();
  }

  async update(params: UpdateBillPayment): Promise<UpdateBillPayment> {
    const { id, params: paramUpdate } = params;
    return await this.billModel.findByIdAndUpdate(id, paramUpdate);
  }
}
