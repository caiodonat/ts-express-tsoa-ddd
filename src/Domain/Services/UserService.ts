import {
	Body, Controller, Delete, Get, Path, Post, Query, Route, SuccessResponse,
} from "tsoa";
import { User } from "../Entities/User";

export class UserService {
	// private readonly _repository: userRepository;

	constructor() {
		// this._repository = new userRepository;
	}

	public async createOne(createUserDto: User): Promise<User> {
		const newUser = createUserDto;

		return newUser;
	}

	async readOne(id: User['id']): Promise<User> {
		return {
			id: id,
			name: 'caio',
			email: 'cdonat.dev@gmail.com'
		}
	}

	public async readAllUsers(): Promise<User[]> {
		return [
			{
				id: 1,
				name: 'caio',
				email: 'cdonat.dev@gmail.com'
			},
			{
				id: 2,
				name: 'Caio Donat',
				email: 'caiohdonat@gmail.com'
			}
		]
	}

	// public async removeUser(id: UserType['id']) {
	// 	// _repository.deleteById(id)
	// 	return;
	// }
}
