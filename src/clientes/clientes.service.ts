import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Clientes } from './clientes.entity';

@Injectable()
export class ClientesService {
  constructor(
    @Inject('CLIENTES_REPOSITORY')
    private clientesRepository: Repository<Clientes>,
  ) {}

  async findAll(): Promise<Clientes[]> {
    console.log('passei aqui');

    return this.clientesRepository.find();
  }

  async updateDados(dados): Promise<any> {
    console.log('update dados');
    console.log(dados);

    return this.clientesRepository.update(
      { cpf: dados.cpf },
      {
        nome: dados.nome,
        datanascimento: dados.datanascimento,
        endereco: dados.endereco,
        telefone: dados.telefone,
        email: dados.email,
      },
    );
  }
}
