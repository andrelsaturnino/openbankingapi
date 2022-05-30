import { Connection } from 'typeorm';
import { Relacionamento } from './relacionamento.entity';

export const relacionamentoProviders = [
  {
    provide: 'RELACIONAMENTO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(Relacionamento),
    inject: ['DATABASE_CONNECTION'],
  },
];
