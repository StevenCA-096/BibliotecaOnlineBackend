import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CostumersService } from './costumers.service';
import { createCustomerDto } from './dto/createCustomerDto';

@Controller('costumers')
export class CostumersController {
    constructor (
        private customerService: CostumersService
    ){}
    
    @Get(':idCustomer')
    async getCustomerById(@Param('idCustomer', ParseIntPipe) idCustomer: number){
        return this.customerService.getCustomerById(idCustomer)
    }

    @Post()
    async createCustomer(@Body() newCustomer: createCustomerDto){
        return this.customerService.createCustomer(newCustomer)
    }

    @Delete(':idCustomer')
    async deleteCustomer(@Param('idCustomer', ParseIntPipe) idCustomer: number){
        return this.customerService.deleteCustomer(idCustomer);
    }
}
