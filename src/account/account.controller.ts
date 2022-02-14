import { Controller, Get, Param } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) {}

    @Get('/:id')
    getAccountById(@Param('id') id: string) {
        return this.accountService.getAccountById(id);
    }
}
