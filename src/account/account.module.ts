import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountsRepository } from './accounts.repository';

@Module({
    imports: [TypeOrmModule.forFeature([AccountsRepository])],
    controllers: [AccountController],
    providers: [AccountService],
})
export class AccountModule {}
