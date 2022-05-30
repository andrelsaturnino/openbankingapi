import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RelacionamentoController } from './relacionamento.controllers';
import { relacionamentoProviders } from './relacionamento.providers';
import { RelacionamentoService } from './relacionamento.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RelacionamentoController],
  providers: [...relacionamentoProviders, RelacionamentoService],
})
export class RelacionamentoModule {}
