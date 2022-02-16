import { Body, Controller, Post } from '@nestjs/common';
import { AccountService as AccountService } from './account.service';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) {}

    @Post('/signup')
    signUp(@Body() authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
        return this.accountService.signUp(authCredentialsDTO);
    }
}
