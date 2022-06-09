import { Module } from '@nestjs/common';
import { RitualsController } from './controllers/rituals.controller';
import { RitualsService } from './services/rituals.service';
import { ConfigModule } from '@nestjs/config';
import { PrayPublisher } from './publishers/pray.publisher';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [RitualsController],
  providers: [RitualsService, PrayPublisher],
})
export class AppModule {}
