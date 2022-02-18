import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { AccountsRepository } from './accounts.repository';
import { AccountDetailsDTO } from './dto/account-details.dto';
import { Account } from './model/account.entity';

@Injectable()
export class AccountService {
    constructor(@InjectRepository(AccountsRepository) private accountsRepository: AccountsRepository) {}

    async getDetails(id: string): Promise<AccountDetailsDTO> {
        const account = await this.accountsRepository.findOne(id);
        if (!account) {
            throw new NotFoundException(`Account with ID: ${id} not found.`);
        }

        const { password, ...account_details } = account;
        return account_details;
    }

    async updateDetails(account_id: string, account_details: AccountDetailsDTO) {
        const { id, email } = await this.getDetails(account_id);
        await this.accountsRepository.save({ ...account_details, id, email });
        return account_details;
    }

    async getAccountById(account_id: string): Promise<Account> {
        const account = await this.accountsRepository.findOne(account_id);
        if (!account) {
            throw new NotFoundException(`Account with ID: ${account_id} not found.`);
        }
        return account;
    }

    async signUp(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
        return this.accountsRepository.createUser(authCredentialsDTO);
    }
}
