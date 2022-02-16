import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { AccountsRepository } from './accounts.repository';

@Injectable()
export class AccountService {
    constructor(@InjectRepository(AccountsRepository) private usersRepository: AccountsRepository) {}

    async signUp(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
        return this.usersRepository.createUser(authCredentialsDTO);
    }
}
