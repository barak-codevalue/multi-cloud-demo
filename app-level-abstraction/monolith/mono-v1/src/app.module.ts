import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { BabyRepository } from './repositories/baby.repository';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BabyRepository],
})
export class AppModule {}
