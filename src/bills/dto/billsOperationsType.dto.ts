export class CreateBillDto {
  number: string;
  readonly game: string;
  readonly isPaid: boolean;
  readonly payer: string;
  readonly amount: number;
  readonly currency: string;
}

export class SearchBillsDto {
  readonly game?: string;
  readonly payer?: string;
}

export class UpdateBillPayment {
  readonly id: string;
  readonly params: {
    readonly isPaid: boolean;
    readonly datePaid: Date;
  };
}
