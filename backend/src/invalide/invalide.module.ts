import { Module } from '@nestjs/common';
import { InvalideController } from './invalide.controller';
import { InvalideService } from './invalide.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invalide } from './invalide.entity';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'calculatrice',
      entities: [Invalide],
      synchronize: false,
      dropSchema: true,
    }), TypeOrmModule.forFeature([Invalide]),
  ],
  
  controllers: [InvalideController],
  providers: [InvalideService]
})
export class InvalideModule {}
