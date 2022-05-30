import { Bancos } from 'src/listaBanco/bancos.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Clientes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 11, nullable: true })
  telefone: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ length: 255, nullable: true })
  datanascimento: string;

  @Column({ length: 255, nullable: true })
  endereco: string;
}
