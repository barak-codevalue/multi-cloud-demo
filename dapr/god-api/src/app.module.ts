import { Module } from '@nestjs/common';
import { RitualsController } from './controllers/rituals.controller';
import { RitualsService } from './services/rituals.service';
import { ConfigModule } from '@nestjs/config';
import { PrayBroker } from './brokers/pray.broker';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [RitualsController],
  providers: [RitualsService, PrayBroker],
})
export class AppModule {}
