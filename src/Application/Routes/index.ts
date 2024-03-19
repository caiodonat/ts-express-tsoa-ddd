import express, { urlencoded, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import user from './UserRoute';
import morgan from "morgan";

const appRouters = express();


appRouters.use(express.json());
appRouters.use(morgan("tiny"));
appRouters.use(express.static("public"));
appRouters.use(express.json());
appRouters.use(
	urlencoded({
		extended: true,
	})
);

appRouters.get("/", swaggerUi.serve, async (req: Request, res: Response) => {
	return res.redirect('/docs');
});

appRouters.use("/docs", swaggerUi.serve, async (req: Request, res: Response) => {
	return res.send(
		swaggerUi.generateHTML(await import("../../../public/swagger.json"))
	);
});

appRouters.use('/users', user);

export default appRouters;
