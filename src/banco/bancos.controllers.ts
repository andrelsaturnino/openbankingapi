import { Controller, Get, Post } from '@nestjs/common';
import { Bancos } from './bancos.entity';

import { BancosService } from './bancos.service';

@Controller('bancos')
export class BancosController {
  constructor(private readonly bancosService: BancosService) {}

  @Get()
  async listar(): Promise<Bancos[]> {
    return this.bancosService.findAll();
  }
}
