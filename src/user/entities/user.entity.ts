import { BaseEntity } from 'src/common/entities/base.entities';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];
}
