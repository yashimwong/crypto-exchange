import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
    imports: [AccountModule, WalletModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
