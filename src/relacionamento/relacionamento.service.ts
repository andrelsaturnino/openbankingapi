import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Relacionamento } from './relacionamento.entity';

@Injectable()
export class RelacionamentoService {
  constructor(
    @Inject('RELACIONAMENTO_REPOSITORY')
    private relacionamentoRepository: Repository<Relacionamento>,
  ) {}

  async findAll(): Promise<Relacionamento[]> {
    return this.relacionamentoRepository.find();
  }

  findOne(id: number) {
    return this.relacionamentoRepository.findOne(id);
  }

  async getProdutos(clientId): Promise<Relacionamento[]> {
    return this.relacionamentoRepository.find(clientId);
  }

  async addConsentimento(consentimento): Promise<any> {
    return this.relacionamentoRepository.update(
      { clienteId: consentimento.cliente },
      { dados_consentidos: JSON.stringify(consentimento.dados_consentidos) },
    );
  }

  async updateProdutos(produto): Promise<any> {
    const update = () => {
      this.relacionamentoRepository.update(
        { clienteId: produto.item.clienteId },
        {
          produtos: JSON.stringify([
            ...produto.oldProdutos,
            {
              nome: produto.item.nome,
              valor: produto.item.valor,
              taxa: produto.item.taxa,
            },
          ]),
        },
      );

      this.relacionamentoRepository.update(
        { clienteId: produto.clienteId },
        {
          propostas: JSON.stringify({}),
        },
      );
    };

    return update();
  }
}
