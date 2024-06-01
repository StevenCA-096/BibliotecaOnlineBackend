import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { LoansService } from './loans.service';
import { createLoanDto } from './dto/createLoanDto';
import { updateLoanDto } from './dto/updateLoanDto';

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

    @Patch('update-loan-date/:idLoan/:newDate')
    async updateLoan(@Param('idLoan', ParseIntPipe) idLoan:number , @Param('newDate') newDate:Date ){
        return this.loanService.updateLoan(idLoan,newDate);
    }
}
