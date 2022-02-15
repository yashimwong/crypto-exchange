import { EntityRepository, Repository } from 'typeorm';
import { Account } from './model/account.entity';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {}
