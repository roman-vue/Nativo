import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TASK } from 'src/database/models/models';
import { TaskSchema } from 'src/database/Schemas/task.schema';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: TASK.name,
        useFactory: () => {
          return TaskSchema;
        },
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
