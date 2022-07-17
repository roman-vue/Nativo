import { StatusTask } from '../enum/status.enum';

export interface ITask extends Document {
  title: string;
  description: string;
  autor: string;
  status: StatusTask;
}
