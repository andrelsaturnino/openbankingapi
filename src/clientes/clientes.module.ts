import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { clientesProviders } from './clientes.providers';
import { ClientesController } from './clientes.controllers';
import { ClientesService } from './clientes.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ClientesController],
  providers: [...clientesProviders, ClientesService],
})
export class ClientesModule {}
