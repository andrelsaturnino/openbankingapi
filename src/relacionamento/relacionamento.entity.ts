import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Relacionamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clienteId: number;

  @Column()
  bancoId: number;

  @Column({ nullable: true })
  produtos: string;

  @Column({ nullable: true })
  dados_consentidos: string;

  @Column({ nullable: true })
  propostas: string;
}
