import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Bancos } from './bancos.entity';

@Injectable()
export class BancosService {
  constructor(
    @Inject('BANCOS_REPOSITORY')
    private bancosRepository: Repository<Bancos>,
  ) {}

  async findAll(): Promise<Bancos[]> {
    console.log('passei aqui');

    return this.bancosRepository.find();
  }
}
