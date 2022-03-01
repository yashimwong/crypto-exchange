import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionController } from './transaction.controller';
import { TransactionRepository } from './transaction.repository';
import { TransactionService } from './transaction.service';

@Module({
    imports: [TypeOrmModule.forFeature([TransactionRepository])],
    controllers: [TransactionController],
    providers: [TransactionService],
})
export class TransactionModule {}
