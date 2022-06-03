import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as AWS from 'aws-sdk';

async function bootstrap() {
  AWS.config.update({ region: 'us-east-2' });
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Babies API')
    .setDescription('The babies API create babies')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(process.env.PORT, 10) || 3000);
}
bootstrap();
