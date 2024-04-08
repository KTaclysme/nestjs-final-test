import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    addUser(email: string): Promise<void> {
        throw new NotImplementedException();
    }

    getUser(email: string): Promise<unknown> {
        throw new NotImplementedException();
    }

    resetData(): Promise<void> {
        throw new NotImplementedException();
    }
}
