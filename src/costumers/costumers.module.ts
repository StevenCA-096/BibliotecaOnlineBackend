import { Module } from '@nestjs/common';
import { CostumersController } from './costumers.controller';
import { CostumersService } from './costumers.service';

@Module({
  controllers: [CostumersController],
  providers: [CostumersService]
})
export class CostumersModule {}
