import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { TaskDto, UpdateDto } from './dto/task.dto';
import { StatusTask } from './enum/status.enum';
import { TaskService } from './task.service';

@ApiTags('TASK')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post('/created')
  public async created(@Body() taskDto: TaskDto) {
    const data = await this.taskService.created(taskDto);
    return { msg: `new task `, status: HttpStatus.OK, data: data };
  }

  @Get('/all-tasks')
  public async getAll() {
    const data = await this.taskService.getAll();
    return { msg: `all tasl `, status: HttpStatus.OK, data: data };
  }

  @Put('/updated/:idTask')
  public async updated(
    @Param('idTask') idTask: string,
    @Body() taskDto: UpdateDto,
  ) {
    const data = await this.taskService.updated(idTask, taskDto);
    return { msg: `update task `, status: HttpStatus.OK, data: data };
  }

  @Patch('/changes-status')
  @ApiQuery({ name: 'status', enum: StatusTask })
  public async changesStatus(
    @Param('idTask') idTask: string,
    @Query('status') status: StatusTask = StatusTask.Completed,
  ) {
    const data = await this.taskService.changesStatus(idTask, status);
    return { msg: `new task `, status: HttpStatus.OK, data: data };
  }
}
