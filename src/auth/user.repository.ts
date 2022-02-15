import { Repository } from 'typeorm';
import { User } from './model/user.entity';

export class UserRepository extends Repository<User> {}
