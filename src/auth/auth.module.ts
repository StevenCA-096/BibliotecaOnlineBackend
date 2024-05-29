import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CostumersService } from 'src/costumers/costumers.service';
import { CostumersModule } from 'src/costumers/costumers.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[CostumersModule]
})
export class AuthModule {}
