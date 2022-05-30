import { Connection } from 'typeorm';
import { Bancos } from './bancos.entity';

export const bancosProviders = [
  {
    provide: 'BANCOS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Bancos),
    inject: ['DATABASE_CONNECTION'],
  },
];
