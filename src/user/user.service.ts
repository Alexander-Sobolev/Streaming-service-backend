import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class UserService {
  constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
	) {}

	async byId() {
		return { email: "oewtu@test.com" }
	}
}
