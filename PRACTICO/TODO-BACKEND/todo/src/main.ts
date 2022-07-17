import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/index.filter';
import { LoggingInterceptor } from './common/interceptors/logger';
import { TimeoutInterceptor } from './common/interceptors/timeout';
import { SwaggerConfig } from './config/swagger/swagger';

async function bootstrap() {
  const configService = new ConfigService();
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(
    new LoggingInterceptor(logger),
    new TimeoutInterceptor(),
  );
  app.useGlobalFilters(new AllExceptionFilter(logger));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('api/v1/task/');

  SwaggerConfig.swaggerConfig(app);
  await app.listen(3000, () => {
    logger.verbose('APP', `Task is running on http://localhost:${3000}`);
    logger.verbose(
      'APP',
      `Swagger is running on http://localhost:${3000}/api/v1/task/docs`,
    );
  });
}
bootstrap();
