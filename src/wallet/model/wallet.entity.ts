import { Exclude } from 'class-transformer';
import { Account } from 'src/account/model/account.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Currency } from './wallet.enum';

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    currency: Currency;

    @Column({ default: 0 })
    balance: number;

    @ManyToOne((_type) => Account, (account) => account.wallet)
    @Exclude({ toPlainOnly: true })
    account: Account;
}
