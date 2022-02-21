import { IsString, Matches } from 'class-validator';

export class WalletDTO {
    @IsString()
    account_id: string;

    @IsString()
    @Matches(/^[A-Z]{3}$/, { message: 'Invalid currency.' })
    currency: string;
}
