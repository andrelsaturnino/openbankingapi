import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bancos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column()
  codigo: number;
}
