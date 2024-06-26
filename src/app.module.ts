import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASWWORD,
      database: process.env.DB_NAME,
      entities: [User, Product],
      synchronize: true,
      logging: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
