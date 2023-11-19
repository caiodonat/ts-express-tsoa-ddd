import express, { Request, Response } from "express";
import { UserService } from "../../Domain/Services/UserService";
// import { UserType } from "src/Domain/Entities/User";

const router = express.Router();

const _service = new UserService();


router.post('/', async (req: Request, res: Response) => {
	const body: any = req.body;

	return res.status(201).send(
		await _service.createOne(body)
	);
});

router.get('/:id', async (req: Request, res: Response) => {
	// const body: any = req.body;
	const id: string = req.params.id;

	const targetUserId = Number.parseInt(id);

	return res.status(200).send(
		await _service.readOne(targetUserId)
	);
});

export default router;
