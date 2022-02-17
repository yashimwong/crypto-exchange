import { IsEnum, IsNumber, IsPositive, IsString, Max, Min } from 'class-validator';
import { Currency, WalletActions } from '../model/wallet.enum';

export class WalletBalanceDTO {
    @IsString()
    id: string;

    @IsEnum(Currency)
    currency: Currency;

    @IsEnum(WalletActions)
    action: WalletActions;

    @IsNumber()
    @IsPositive()
    @Max(9999)
    amount: number;
}
