import { NestFactory } from '@nestjs/core';
import { CommandFactory } from 'nest-commander';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
  await CommandFactory.run(AppModule);
}
bootstrap();
