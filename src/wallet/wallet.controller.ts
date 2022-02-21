import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { WalletDTO } from './dto/create-wallet.dto';
import { WalletBalanceDTO } from './dto/wallet-balance.dto';
import { WalletTransferDTO } from './dto/wallet-transfer.dto';
import { Wallet } from './model/wallet.entity';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
    constructor(private walletService: WalletService) {}

    @Post('')
    async addWallet(@Body() walletDTO: WalletDTO): Promise<Wallet> {
        return this.walletService.addWallet(walletDTO);
    }

    @Get(':id')
    async getWallet(@Param('id') id: string) {
        return this.walletService.getWalletById(id);
    }

    @Patch(':id')
    async updateBalance(@Param('id') id: string, @Body() walletBalanceDTO: WalletBalanceDTO): Promise<Wallet> {
        return this.walletService.updateBalance(id, walletBalanceDTO);
    }

    @Post('/transfer')
    async transferFunds(@Body() walletTransferDTO: WalletTransferDTO): Promise<Wallet> {
        return this.walletService.transferFunds(walletTransferDTO);
    }
}
