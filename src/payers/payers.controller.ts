import { Controller, Get } from '@nestjs/common/decorators';
import { PayerService } from './payers.service';
import { Payer } from './schemas/payer.schemas';

@Controller('api/payers')
export class PayerController {
  constructor(private readonly payerService: PayerService) {}
  @Get()
  findAll(): Promise<Payer[]> {
    return this.payerService.findAll();
  }
}
