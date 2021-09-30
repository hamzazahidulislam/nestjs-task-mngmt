/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from 'src/tasks/task.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  // entities: [__dirname + '/../**/*.entity.ts'], // this is not working on Windows
  // entities: [__dirname + '/**/*.entity{.ts,.js}'], ---> this line is working
  entities: [Task],
  synchronize: true, //this line not for production use
};
