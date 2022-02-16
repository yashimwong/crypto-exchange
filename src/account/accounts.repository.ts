import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { Account } from './model/account.entity';

@EntityRepository(Account)
export class AccountsRepository extends Repository<Account> {
    async createUser(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
        const user = this.create(authCredentialsDTO);

        try {
            await this.save(user);
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Username already exist');
            }
            throw new InternalServerErrorException();
        }
    }
}
