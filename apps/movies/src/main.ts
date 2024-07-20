import { NestFactory } from '@nestjs/core';
import { MoviesModule } from './movies.module';

async function bootstrap() {
 const app = await NestFactory.create(MoviesModule);
  await app.listen(4001);
}
bootstrap();
