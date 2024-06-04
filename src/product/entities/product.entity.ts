import { BaseEntity } from 'src/common/entities/base.entities';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.products)
  user: User;
}
