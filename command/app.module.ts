import { Module } from '@nestjs/common';

import { TestCommand } from './test/test.command';

@Module({
  providers: [TestCommand],
})
export class AppModule {}
