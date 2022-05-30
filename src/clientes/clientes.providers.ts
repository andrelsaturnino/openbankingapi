import { Connection } from 'typeorm';
import { Clientes } from './clientes.entity';

export const clientesProviders = [
  {
    provide: 'CLIENTES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Clientes),
    inject: ['DATABASE_CONNECTION'],
  },
];
