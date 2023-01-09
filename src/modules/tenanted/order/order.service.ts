import { Inject, Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-cat.dto';
import { Order } from './order.entity';
import { CONNECTION } from '../../tenancy/tenancy.symbols';

@Injectable()
export class OrderService {
  private readonly orderRepository: Repository<Order>;

  constructor(@Inject(CONNECTION) connection: Connection) {
    this.orderRepository = connection.getRepository(Order);
  }

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    const cat = new Order();
    cat.name = createOrderDto.name;

    return this.orderRepository.save(cat);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }
}
