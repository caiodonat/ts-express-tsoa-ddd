import express, { json, urlencoded, Request, Response } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
/*
import cookieParser from "cookie-parser";
import cors from "cors";
app.use(cors());
*/

import routers from './Application/Controllers/index';

console.time('Restart');

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

app.use(express.json());

// app.use(
//   "/docs",
//   swaggerUi.serve,
//   swaggerUi.setup(undefined, {
//     swaggerOptions: {
//       url: await import("../public/swagger.json"),
//       // url: "/swagger.json",
//     },
//   })
// );
app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
  return res.send(
    swaggerUi.generateHTML(await import("../public/swagger.json"))
  );
});

app.use(routers);

app.listen(3333, () => console.timeEnd('Restart'));
