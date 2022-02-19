import { Module } from '@nestjs/common';
import { FeedGateway } from './feed.gateway';

@Module({
    providers: [FeedGateway],
})
export class FeedModule {}
