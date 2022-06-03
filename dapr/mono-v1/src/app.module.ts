import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { BabyRepository } from './repositories/baby.repository';
import { AppService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, BabyRepository],
})
export class AppModule {}
