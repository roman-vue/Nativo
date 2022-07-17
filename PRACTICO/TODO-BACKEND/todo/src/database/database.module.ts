import { Module } from '@nestjs/common';
import { databaseProvidersMongo } from './database.service';

@Module({
  imports: [databaseProvidersMongo],
  exports: [databaseProvidersMongo],
})
export class DatabaseModule {}
