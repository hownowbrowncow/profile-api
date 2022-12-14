import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Profile API')
    .setDescription('Profile API Swagger')
    .setVersion('1.0')
    .addTag('users')
    .addTag('bios')
    .addTag('app')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
  });

  await app.listen(5000);
}
bootstrap();
