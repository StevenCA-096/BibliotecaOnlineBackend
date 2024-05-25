import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { LoansService } from './loans.service';
import { CostumersModule } from 'src/costumers/costumers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './loans.entity';
import { BooksModule } from 'src/books/books.module';

@Module({
  controllers: [LoansController],
  providers: [LoansService],
  imports:[TypeOrmModule.forFeature([Loan]),CostumersModule, BooksModule]
})
export class LoansModule {}
