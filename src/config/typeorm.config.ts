/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from 'src/tasks/task.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'test_db',
  // entities: [__dirname + '/../**/*.entity.ts'], // this is not working on Windows
  entities: [Task],
  synchronize: true, //this line not for production use
};
