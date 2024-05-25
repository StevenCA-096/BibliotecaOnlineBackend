import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { LoansService } from './loans.service';
import { createLoanDto } from './dto/createLoanDto';

@Controller('loans')
export class LoansController {
    constructor(
        private loanService: LoansService
    ){}

    @Get('get-customer-loans/:idCustomer')
    async getCustomerLoans(@Param('idCustomer', ParseIntPipe) idCustomer: number){
        return this.loanService.getCustomerLoans(idCustomer);
    }

    @Post()
    async createLoan(@Body() newLoan: createLoanDto){
        return this.loanService.createLoan(newLoan)
    }
}
