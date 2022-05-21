import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';
import { BabyAwsRepository } from './repositories/baby.aws.repository';
import { BabyAzureRepository } from './repositories/baby.azure.repository';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'BabyRepository',
      useClass:
        process.env.CLOUD_PROVIDER === 'AWS'
          ? BabyAwsRepository
          : BabyAzureRepository,
    },
  ],
})
export class AppModule {}
