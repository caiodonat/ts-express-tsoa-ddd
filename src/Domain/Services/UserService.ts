import {
	Body,
	Controller,
	Delete,
	Get,
	Path,
	Post,
	Query,
	Route,
	SuccessResponse,
} from "tsoa";

import { UserType } from "../Entities/User";

@Route("users")
export class UserService extends Controller {
	// private readonly _repository: userRepository;

	constructor() {
		super();
		// this._repository = new userRepository;
	}
	
	@Post("")
	@SuccessResponse("201", "Created")
	public async createOne(
		@Body() createUserDto: UserType
	): Promise<UserType> {
		const newUser = createUserDto;

		return newUser;
	}

	@Get("{id}")
	@SuccessResponse("200")
	async readOne(
		@Path() id: UserType['id']
	): Promise<UserType> {
		return {
			id: id,
			name: 'caio',
			email: 'cdonat.dev@gmail.com'
		}
	}

	// @Delete("{id}")
	// @SuccessResponse("204")
	// async deleteOne(
	// 	@Path() id: UserType['id']
	// ) {
	// 	// _repository.deleteById(id)
	// 	return;
	// }
}
