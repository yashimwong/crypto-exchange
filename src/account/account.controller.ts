import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AccountService as AccountService } from './account.service';
import { AccountDetailsDTO } from './dto/account-details.dto';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) {}

    @Get('/:id')
    getDetails(@Param('id') id: string): Promise<AccountDetailsDTO> {
        return this.accountService.getDetails(id);
    }

    @Patch('/:id')
    updateDetails(@Param('id') id: string, @Body() accountDetailsDTO: AccountDetailsDTO) {
        return this.accountService.updateDetails(id, accountDetailsDTO);
    }

    @Post('/signup')
    signUp(@Body() authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
        return this.accountService.signUp(authCredentialsDTO);
    }
}
