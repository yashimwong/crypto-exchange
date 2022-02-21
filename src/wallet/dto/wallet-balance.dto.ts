import { IsDecimal, IsEnum, IsPositive, IsString, Matches } from 'class-validator';
import { WalletActions } from '../model/wallet.enum';

export class WalletBalanceDTO {
    @IsString()
    @Matches(/^[A-Z]{3,4}$/, { message: 'Invalid currency.' })
    currency: string;

    @IsEnum(WalletActions)
    action: WalletActions;

    @IsPositive()
    @IsDecimal()
    amount: number;
}
