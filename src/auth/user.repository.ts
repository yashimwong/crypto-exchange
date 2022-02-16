import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { User } from './model/user.entity';

export class UserRepository extends Repository<User> {
    async createUser(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
        const { username, password } = authCredentialsDTO;

        const user = this.create({ username, password });

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
