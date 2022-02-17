import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class AuthCredentialsDTO {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password is too weak',
    })
    password: string;
}
