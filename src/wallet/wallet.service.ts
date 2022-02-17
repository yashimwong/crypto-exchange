import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountsRepository } from 'src/account/accounts.repository';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(WalletRepository) private walletRepository: WalletRepository,
        @InjectRepository(AccountsRepository) private accountRepository: AccountsRepository,
    ) {}

    async getWallets(account_id: string) {
        const account = await this.accountRepository.findOne(account_id);
        if (!account) {
            throw new NotFoundException(`Account with ID: ${account_id} not found.`);
        }

        return account.wallet;
    }
}
