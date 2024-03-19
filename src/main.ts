import express from "express";
import routers from './Application/Routes/index';


async function bootstrap() {
  console.time('Restart');

  const app = express();
  app.use(routers);

  app.listen(3333, () => console.timeEnd('Restart'));
}

bootstrap();
