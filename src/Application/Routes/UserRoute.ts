import express, { Request, Response } from "express";
import { UserController } from "../Controllers/UserController";

const router = express.Router();
const _service = new UserController();

router.post('/', async (req: Request, res: Response) => {
	const body: any = req.body;

	return await _service.createUser(req, res, body)
});

router.get('/all', async (req: Request, res: Response) => {
	return await _service.getAllUser(req, res)
});

router.get('/:id', async (req: Request, res: Response) => {
	const id: any = req.params.id;

	return await _service.findUser(req, res, id)
});

export default router;
