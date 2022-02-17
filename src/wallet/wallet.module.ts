import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsRepository } from 'src/account/accounts.repository';
import { WalletController } from './wallet.controller';
import { WalletRepository } from './wallet.repository';
import { WalletService } from './wallet.service';

@Module({
    imports: [TypeOrmModule.forFeature([WalletRepository, AccountsRepository])],
    controllers: [WalletController],
    providers: [WalletService],
})
export class WalletModule {}
