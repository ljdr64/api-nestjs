import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('orders')
  getOrders() {
    return `orders`;
  }

  @Get(':orderId')
  getOrder(@Param('orderId') orderId: string) {
    return `orderId ${orderId}`;
  }
}
