import { IsEnum, IsNumber, IsPositive, IsString, Max, Min } from 'class-validator';
import { Currency, WalletActions } from '../model/wallet.enum';

export class WalletBalanceDTO {
    @IsEnum(Currency)
    currency: Currency;

    @IsEnum(WalletActions)
    action: WalletActions;

    amount: number;
}
