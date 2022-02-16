import { EntityRepository, Repository } from 'typeorm';
import { Wallet } from './model/wallet.entity';

@EntityRepository(Wallet)
export class WalletRepository extends Repository<Wallet> {}
