import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/books/book.entity';
import { Repository } from 'typeorm';
import { createCustomerDto } from './dto/createCustomerDto';
import { Costumer } from './costumer.entity';

@Injectable()
export class CostumersService {
    
    constructor(
        @InjectRepository(Costumer) private customerRepository: Repository<Costumer>
    ){}

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
}
