import { Wallet } from 'src/wallet/model/wallet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: '' })
    full_name: string;

    @Column({ default: '' })
    phone_number: string;

    @Column({ nullable: true })
    date_of_birth: Date;

    @Column({ default: '' })
    address_line1: string;

    @Column({ default: '' })
    address_line2: string;

    @Column({ default: '' })
    address_country: string;

    @Column({ default: '' })
    address_postcode: string;

    @OneToMany((_type) => Wallet, (wallet) => wallet.account, { eager: true })
    wallet: Wallet;
}
