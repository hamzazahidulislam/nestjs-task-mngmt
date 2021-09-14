import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTaskWithFilter(filterDto);
  //   }
  //   return this.tasksService.getAllTasks();
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') taskId: string): Task {
  //   const found = this.tasksService.getTaskById(taskId);
  //   if (!found) {
  //     throw new NotFoundException(`Task with ID "${taskId}" not found `);
  //   }
  //   return found;
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') taskId: string): void {
  //   const found = this.getTaskById(taskId);
  //   this.tasksService.deleteTask(found.id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') taskId: string,
  //   @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  // ) {
  //   return this.tasksService.updateTaskStatus(taskId, status);
  // }
}
