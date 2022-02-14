import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
    async getAccountById(id: string) {
        return `Get: ${id}`;
    }
}
