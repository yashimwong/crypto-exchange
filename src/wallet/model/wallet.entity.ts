import { Exclude } from 'class-transformer';
import { Account } from 'src/account/model/account.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    currency: string;

    @Column('decimal', { default: 0, precision: 8 })
    balance: number;

    @ManyToOne(() => Account, (account) => account.wallet)
    @Exclude({ toPlainOnly: true })
    account: Account;
}
