import { MongooseModule } from '@nestjs/mongoose';

export const databaseProvidersMongo = MongooseModule.forRoot(
  `mongodb://localhost:27017/todo`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
  },
);
