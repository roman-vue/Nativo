import { Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    autor: { type: String, required: true },
    status: { type: String, required: false },
  },
  { timestamps: true },
);

TaskSchema.index({ title: 1 }, { unique: true });
