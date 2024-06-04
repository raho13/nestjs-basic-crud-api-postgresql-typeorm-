import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  getAll() {
    return this.userRepository.find();
  }
  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    newUser.id = uuidv4();
    newUser.email = createUserDto.email;
    newUser.name = createUserDto.name;
    this.userRepository.save(newUser);
    return { message: 'Saved', newUser };
  }
  async update(updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        id: updateUserDto.id,
      },
    });
    if (user) {
      user.name = updateUserDto.name;
      user.email = updateUserDto.email;
      return await this.userRepository.save(user);
    } else {
      throw new Error('user not found');
    }
  }

  delete(id: string) {
    return this.userRepository.softDelete(id);
  }
}
