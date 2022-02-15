import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { WalletModule } from './wallet/wallet.module';
import { FeedModule } from './feed/feed.module';
import { TradeModule } from './trade/trade.module';

@Module({
    imports: [AccountModule, WalletModule, FeedModule, TradeModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
