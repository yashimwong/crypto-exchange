import { Wallet } from 'src/wallet/model/wallet.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionType, TransactionStatus } from './transaction.enum';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    currency: string;

    @Column()
    type: TransactionType;

    @Column('decimal', { default: 0, precision: 8 })
    current_price: number;

    @Column('decimal', { default: 0, precision: 8 })
    quantity: number;

    @Column()
    time: Date;

    @Column()
    status: TransactionStatus;

    @ManyToOne(() => Wallet)
    wallet: Wallet;
}
