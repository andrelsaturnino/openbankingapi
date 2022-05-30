import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BancosController } from './bancos.controllers';
import { bancosProviders } from './bancos.providers';
import { BancosService } from './bancos.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BancosController],
  providers: [...bancosProviders, BancosService],
})
export class BancosModule {}
