import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CostumersService } from 'src/costumers/costumers.service';
import { credentials } from './dto/creadentialsDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private costumerService: CostumersService) {}

  @Post()
  async customerLogin (@Body() credentialsCustomer: credentials){
    return await this.costumerService.customerLogin(credentialsCustomer)
  }
}
