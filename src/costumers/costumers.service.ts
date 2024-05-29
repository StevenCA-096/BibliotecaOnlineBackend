import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createCustomerDto } from './dto/createCustomerDto';
import { Costumer } from './costumer.entity';
import { credentials } from 'src/auth/dto/creadentialsDto';

@Injectable()
export class CostumersService {
    
    constructor(
        @InjectRepository(Costumer) private customerRepository: Repository<Costumer>
    ){}

    async getAllCustomers(){
        return this.customerRepository.find();
    }

    async createCustomer (newCustomer: createCustomerDto){
        const prepareNewCustomer = this.customerRepository.create(newCustomer);

        return this.customerRepository.save(prepareNewCustomer);
    }

    async getCustomerById(id:number){
        return this.customerRepository.findOne({where:{id}})
    }

    async deleteCustomer(idCustomer: number){
        return this.customerRepository.delete(idCustomer)
    }

    async customerLogin(customerCredentials: credentials){
        const found = await this.customerRepository.findOne({
            where:{email: customerCredentials.email}
        })

        if (found) {

            if (customerCredentials.password == found.password) {
                return true;            
            }else 
            {
                return new HttpException(customerCredentials, HttpStatus.FORBIDDEN)
            }

        }else{
            return new NotFoundException(credentials)
        }
    }
}
