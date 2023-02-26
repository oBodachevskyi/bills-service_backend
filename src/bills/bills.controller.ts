import { HttpStatus } from '@nestjs/common';
import {
  Body,
  Controller,
  Header,
  HttpCode,
  Post,
  Patch,
} from '@nestjs/common/decorators';
import { BillService } from './bills.service';
import {
  CreateBillDto,
  SearchBillsDto,
  UpdateBillPayment,
} from './dto/billsOperationsType.dto';

@Controller('api/bills')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createBillDto: CreateBillDto) {
    return this.billService.create(createBillDto);
  }

  @Post(`update/:id`)
  @HttpCode(HttpStatus.ACCEPTED)
  update(@Body() params: UpdateBillPayment) {
    return this.billService.update(params);
  }

  @Patch()
  async findAll(@Body() params: SearchBillsDto) {
    return this.billService.findAll(params);
  }
}
