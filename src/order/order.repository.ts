import { EntityRepository, Repository } from 'typeorm';
import { Order } from './model/order.entity';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {}
