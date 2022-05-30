import { Controller, Get, Post, Body } from '@nestjs/common';
import { Clientes } from './clientes.entity';

import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  async listar(): Promise<Clientes[]> {
    return this.clientesService.findAll();
  }

  @Post()
  createMessage(@Body() message: any) {
    this.updateDados(message);
  }
  async updateDados(message): Promise<Clientes[]> {
    console.log('message');
    console.log(message);
    return this.clientesService.updateDados(message);
  }
}
