import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ValideModule } from './valide/valide.module';
import { InvalideModule } from './invalide/invalide.module';

@Module({
  imports: [ValideModule, InvalideModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
