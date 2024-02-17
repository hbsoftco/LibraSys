import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { setupSwagger } from './swagger';
import * as basicAuth from 'express-basic-auth';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // App versioning
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Protect headers
  app.use(helmet());

  // Set global prefix
  app.setGlobalPrefix('api');

  app.use(
    ['/swagger'],
    basicAuth({
      challenge: true,
      users: {
        [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
      },
    }),
  );

  // Swagger
  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
