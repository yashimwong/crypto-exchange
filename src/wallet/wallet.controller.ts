import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WalletDTO } from './dto/create-wallet.dto';
import { WalletBalanceDTO } from './dto/wallet-balance.dto';
import { Wallet } from './model/wallet.entity';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
    constructor(private walletService: WalletService) {}

    @Get('/:id')
    async getWallets(@Param('id') account_id: string) {
        return this.getWallets(account_id);
    }

    @Post('')
    async addWallet(@Body() walletDTO: WalletDTO): Promise<Wallet> {
        return this.walletService.addWallet(walletDTO);
    }

    @Post('/balance')
    async updateBalance(@Body() walletBalanceDTO: WalletBalanceDTO): Promise<Wallet> {
        return this.walletService.updateBalance(walletBalanceDTO);
    }
}
