/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
  @InjectRepository(TaskRepository)
  constructor(private taskRepository: TaskRepository,){}
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTaskWithFilter(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //   return tasks;
  // }
  async getTaskById(id:number): Promise<Task> {
    const found  = await this.taskRepository.findOne(id);
    if(!found){
      throw new NotFoundException(`Task ${id} not found`);
    }
    return found;
  }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuidv4(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // deleteTask(taskId: string): void {
  //   this.tasks = this.tasks.filter((task) => task.id !== taskId);
  // }
  // updateTaskStatus(taskId: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(taskId);
  //   task.status = status;
  //   return task;
  // }
}
