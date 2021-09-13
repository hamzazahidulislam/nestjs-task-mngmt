/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
