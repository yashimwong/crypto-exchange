import { IsDecimal, IsPositive, IsString } from 'class-validator';

export class WalletTransferDTO {
    @IsString()
    from_id: string;

    @IsString()
    to_id: string;

    @IsPositive()
    @IsDecimal()
    amount: number;
}
