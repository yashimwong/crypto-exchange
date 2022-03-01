import { Wallet } from 'src/wallet/model/wallet.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderActions } from './order.enum';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    currency: string;

    @Column()
    type: OrderActions;

    @Column('decimal', { default: 0, precision: 8 })
    price: number;

    @Column()
    time: Date;

    @ManyToOne(() => Wallet)
    wallet: Wallet;
}
