import { IsDateString, IsEmail, IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class AccountDetailsDTO {
    @IsOptional()
    @IsString()
    id: string;

    @IsOptional()
    @IsEmail()
    @MaxLength(320)
    email: string;

    @IsString()
    @MinLength(2)
    full_name: string;

    @IsPhoneNumber()
    phone_number: string;

    @IsDateString()
    date_of_birth: Date;

    @IsString()
    address_line1: string;

    @IsString()
    address_line2: string;

    @IsString()
    address_country: string;

    @MinLength(1)
    @MaxLength(32)
    address_postcode: string;
}
