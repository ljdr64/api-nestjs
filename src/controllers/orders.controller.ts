import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders() {
    return `orders`;
  }

  @Get(':orderId')
  getOrder(@Param('orderId') orderId: string) {
    return `orderId ${orderId}`;
  }
}
