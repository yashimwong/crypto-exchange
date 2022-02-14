import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    full_name: string;

    @Column()
    phone: string;

    @Column()
    date_of_birth: Date;

    @Column()
    address_line1: string;

    @Column()
    address_line2: string;

    @Column()
    address_country: string;

    @Column()
    address_postcode: string;
}
