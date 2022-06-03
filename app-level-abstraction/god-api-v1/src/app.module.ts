import { Module } from '@nestjs/common';
import { RitualsController } from './controllers/rituals.controller';
import { PrayRepository } from './repositories/pray.repository';
import { RitualsService } from './services/rituals.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [RitualsController],
  providers: [RitualsService, PrayRepository],
})
export class AppModule {}
