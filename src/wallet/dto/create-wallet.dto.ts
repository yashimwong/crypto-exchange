import { IsEnum, IsString } from 'class-validator';
import { Currency } from '../model/wallet.enum';

export class WalletDTO {
    @IsString()
    account_id: string;

    @IsEnum(Currency)
    currency: Currency;
}
