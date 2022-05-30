import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { Relacionamento } from './relacionamento.entity';

import { RelacionamentoService } from './relacionamento.service';

@Controller('relacionamento')
export class RelacionamentoController {
  constructor(private readonly relacionamentoService: RelacionamentoService) {}

  @Get()
  async listar(): Promise<Relacionamento[]> {
    return this.relacionamentoService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.relacionamentoService.findOne(+id);
  }

  @Post()
  createMessage(@Body() message: any) {
    this.addConsentimento(message);
  }
  async addConsentimento(message): Promise<Relacionamento[]> {
    return this.relacionamentoService.addConsentimento(message);
  }

  @Put('contratar')
  createMessageProdutos(@Body() message: any) {
    this.updateProdutos(message);
  }
  async updateProdutos(message): Promise<Relacionamento[]> {
    return this.relacionamentoService.updateProdutos(message);
  }
}
