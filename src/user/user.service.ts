import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  getAll() {
    return [{ name: 'rahib' }, { name: 'Afaq' }];
  }
  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    newUser.id = uuidv4();
    newUser.email = createUserDto.email;
    newUser.name = createUserDto.name;
    this.userRepository.save(newUser);
    return { message: 'Saved', newUser };
  }
}
