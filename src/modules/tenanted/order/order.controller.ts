import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-cat.dto';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }
}
