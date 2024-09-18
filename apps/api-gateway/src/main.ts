import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up microservice communication
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { port: 3001 }, // Port for the API Gateway
  });

  await app.startAllMicroservices();
  await app.listen(3000); // Port for HTTP requests
}
bootstrap();
