import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get('customers')
  getCustomers(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `customers: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  @Get('filter')
  getCustomerFilter() {
    return `yo soy un filter`;
  }

  @Get(':customerId')
  getCustomer(@Param('customerId') customerId: string) {
    return `customerId ${customerId}`;
  }
}
