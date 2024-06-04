import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    if (product) {
      product.name = updateProductDto.name;
      return await this.productRepository.save(product);
    } else {
      throw new Error('product not found');
    }
  }

  remove(id: string) {
    return this.productRepository.softDelete(id);
  }
}
