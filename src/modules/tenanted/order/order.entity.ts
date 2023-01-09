import { AbstractEntity } from '../../../abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'order'})
export class Order extends AbstractEntity {
  @Column()
  name: string;
}
