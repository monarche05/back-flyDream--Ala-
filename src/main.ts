import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.use(async (req, res, next) => {
    const token = req.headers.authorization;
    // A la place de "jonathan" vous pouvez mettre nimporte
    // qu'elle valeur. Il suffira de la changer dans la requette
    // "Postman" dans les Authorization.
    if (token == 'jonathan') {
      next();
    } else {
      return res.status(401).send({ message: 'sorry you are not authorized!' });
    }
  });

  await app.listen(3000);
}
bootstrap();
