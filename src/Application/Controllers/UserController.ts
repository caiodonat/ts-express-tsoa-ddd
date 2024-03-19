import type { Request, Response } from "express";
import { Body, Controller, Delete, Get, Inject, Path, Post, Route, SuccessResponse, Tags } from "tsoa";
import { UserService } from "@Domain/Services/UserService";
import { User } from "@Domain/Entities/User";


@Tags('User')
@Route("users")
export class UserController extends Controller {

	private readonly _service = new UserService();

	@Post('/')
	public async createUser(
		@Inject() req: Request,
		@Inject() res: Response,
		@Body() body: User
	): Promise<any> {
		try {
			const newUserDb = await this._service.createOne(body)
			return res.status(201).send(
				newUserDb
			);
		} catch (ex) {
			return res.status(422).send(
				ex
			);
		}
	};

	@Get('/:id')
	public async findUser(
		@Inject() req: Request,
		@Inject() res: Response,
		@Path('id') id: number
	): Promise<any> {
		try {
			// const targetUserId = Number.parseInt(id);
			const newUserDb = await this._service.readOne(id)
			return res.status(200).send(
				newUserDb
			);
		} catch (ex) {
			return res.status(422).send(
				ex
			);
		}
	};

	@Get('/all')
	@SuccessResponse(200)
	public async getAllUser(
		@Inject() req: Request,
		@Inject() res: Response
	): Promise<User[]> {

		const result = await this._service.readAllUsers();

		res.status(200).send(
			result
		);
		return result;
	};

	@Delete('/:id')
	@SuccessResponse(204)
	public async deleteUser(
		@Inject() req: Request,
		@Inject() res: Response,
		@Path('id') id: number
	): Promise<void> {
		try {
			const newUserDb = await this._service.readOne(id)

			res.status(204).send(
			);
			return;
		} catch (ex) {
			res.status(422).send(
				ex
			);
			return;
		}
	}
}
