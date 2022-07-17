import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TASK } from 'src/database/models/models';
import { TaskDto, UpdateDto } from './dto/task.dto';
import { StatusTask } from './enum/status.enum';
import { ITask } from './interface/tasks.interface';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TASK.name) private readonly taskModel: Model<ITask>,
  ) {}

  public async created(taskDto: TaskDto) {
    taskDto.status = StatusTask.Pending;
    const task = new this.taskModel(taskDto);
    const data = await task.save();
    return data;
  }

  public async getAll() {
    const data = await this.taskModel.find();
    return data;
  }

  public async updated(idTask: string, taskDto: UpdateDto) {
    const verifyId = await this.taskModel.findOne({ id: idTask });
    if (!verifyId) {
      throw new ConflictException(`this task does not exist`);
    }
    verifyId.title = taskDto.title;
    verifyId.description = taskDto.description;
    verifyId.autor = taskDto.autor;

    const taskUpdated = new this.taskModel(verifyId);
    const data = await taskUpdated.save();
    return data;
  }

  public async changesStatus(idTask: string, status: StatusTask) {
    const verifyId = await this.taskModel.findOne({ id: idTask });
    if (!verifyId) {
      throw new ConflictException(`this task does not exist`);
    }
    if (
      (status == StatusTask.Completed &&
        verifyId.status == StatusTask.Completed) ||
      (status == StatusTask.Pending && verifyId.status == StatusTask.Pending)
    ) {
      throw new BadRequestException(`this state is already registered`);
    }

    verifyId.status = status;

    const statusUpdated = new this.taskModel(verifyId);
    const data = await statusUpdated.save();
    return data;
  }
}
