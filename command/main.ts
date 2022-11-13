import { CommandFactory } from 'nest-commander';

import { AppModule } from './app.module';

async function bootstrap() {
  await CommandFactory.run(AppModule, ['warn', 'error']);
}

bootstrap()
  .then(() => {
    console.log('command bootstraped');
    process.exit(0);
  })
  .catch((error) => {
    console.error('failed to start command server', error);
    process.exit(1);
  });
