import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return `brands`;
  }

  @Get(':brandId')
  getBrand(@Param('brandId') brandId: string) {
    return `brandId ${brandId}`;
  }
}
