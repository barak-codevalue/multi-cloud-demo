import { Module } from '@nestjs/common';
import { RitualsService } from './services/rituals.service';
import { ConfigModule } from '@nestjs/config';
import { PrayAwsRepository } from './repositories/pray.aws.repository';
import { PrayAzureRepository } from './repositories/pray.azure.repository';
import { RitualsController } from './controllers/rituals.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [RitualsController],
  providers: [
    RitualsService,
    {
      provide: 'PrayRepository',
      useClass:
        process.env.CLOUD_PROVIDER === 'AWS'
          ? PrayAwsRepository
          : PrayAzureRepository,
    },
  ],
})
export class AppModule {}
