import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('users')
  getUsers(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `users: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  @Get('filter')
  getUserFilter() {
    return `yo soy un filter`;
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return `userId ${userId}`;
  }
}
