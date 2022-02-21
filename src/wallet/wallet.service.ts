import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountService } from 'src/account/account.service';
import { WalletDTO } from './dto/create-wallet.dto';
import { WalletBalanceDTO } from './dto/wallet-balance.dto';
import { Wallet } from './model/wallet.entity';
import { WalletActions } from './model/wallet.enum';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(WalletRepository) private walletRepository: WalletRepository,
        private accountService: AccountService,
    ) {}

    async addWallet(walletDTO: WalletDTO): Promise<Wallet> {
        const { account_id, currency } = walletDTO;
        const account = await this.accountService.getAccountById(account_id);
        if (account.wallet.some((w) => w.currency === currency)) {
            throw new ConflictException(`You already have a $${currency} account.`);
        }

        const new_wallet = this.walletRepository.create({ currency, balance: 0, account });
        this.walletRepository.save(new_wallet);
        return new_wallet;
    }

    async getWalletById(id: string): Promise<Wallet> {
        const wallet = await this.walletRepository.findOne(id);
        if (!wallet) {
            throw new NotFoundException(`Wallet with ID: ${id} not found.`);
        }
        return wallet;
    }

    async updateBalance(id: string, walletBalanceDTO: WalletBalanceDTO): Promise<Wallet> {
        const wallet = await this.getWalletById(id);

        const { currency, action, amount } = walletBalanceDTO;
        if (wallet.currency !== currency) {
            throw new BadRequestException(`Currency ${currency} does not match wallet.`);
        }

        const current_balance = Number(wallet.balance);
        const sent_amount = Number(amount);

        switch (action) {
            case WalletActions.deposit:
                wallet.balance = current_balance + sent_amount;
                break;
            default:
                if (current_balance < sent_amount) {
                    throw new BadRequestException(`Insufficient balance.`);
                }
                wallet.balance = current_balance - sent_amount;
        }

        this.walletRepository.save(wallet);
        return wallet;
    }
}
