import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountsRepository } from 'src/account/accounts.repository';
import { WalletDTO } from './dto/create-wallet.dto';
import { WalletBalanceDTO } from './dto/wallet-balance.dto';
import { Wallet } from './model/wallet.entity';
import { WalletActions } from './model/wallet.enum';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(WalletRepository) private walletRepository: WalletRepository,
        @InjectRepository(AccountsRepository) private accountRepository: AccountsRepository,
    ) {}

    async addWallet(walletDTO: WalletDTO): Promise<Wallet> {
        const { account_id, currency } = walletDTO;
        const account = await this.accountRepository.findOne(account_id);
        if (!account) {
            throw new NotFoundException(`Account with ID: ${account_id} not found.`);
        }
        if (account.wallet.currency === currency) {
            throw new ConflictException(`You already have ${currency} account available.`);
        }

        const new_wallet = this.walletRepository.create({ currency, balance: 0, account });
        this.walletRepository.save(new_wallet);
        return new_wallet;
    }

    async getWallets(account_id: string) {
        const account = await this.accountRepository.findOne(account_id);
        if (!account) {
            throw new NotFoundException(`Account with ID: ${account_id} not found.`);
        }

        return account.wallet;
    }

    async updateBalance(walletBalanceDTO: WalletBalanceDTO): Promise<Wallet> {
        const { id, currency, action, amount } = walletBalanceDTO;
        const wallet = await this.walletRepository.findOne(id);
        if (!wallet) {
            throw new NotFoundException(`Wallet with ID: ${id} not found.`);
        }
        if (wallet.currency !== currency) {
            throw new BadRequestException(`Currency ${currency} does not match wallet.`);
        }

        switch (action) {
            case WalletActions.deposit:
                wallet.balance += amount;
                break;
            default:
                wallet.balance -= amount;
        }

        this.walletRepository.save(wallet);
        return wallet;
    }
}
