import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BancosModule } from './banco/bancos.module';
import { ClientesModule } from './clientes/clientes.module';
import { RelacionamentoModule } from './relacionamento/relacionamento.module';

@Module({
  imports: [BancosModule, ClientesModule, RelacionamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
