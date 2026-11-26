import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
  );

  // Garante fechamento limpo do pool PostgreSQL/Drizzle ao encerrar o container
  app.enableShutdownHooks();

  const port = Number(process.env.PORT ?? 3000);

  // Fastify faz bind em 127.0.0.1 por padrão; '0.0.0.0' é obrigatório para Docker
  await app.listen(port, '0.0.0.0');
}

void bootstrap();
