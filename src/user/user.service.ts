import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { validationErrorCatcher } from '../errors/validationErrorCatcher';
import { ValidationError } from 'sequelize';

@Injectable()
export class UserService {
    constructor(private readonly _userRepository: UserRepository) {}

    async addUser(email: string): Promise<UserEntity> {
        try {
            const newUser = await this._userRepository.addUser(email);
            return newUser;
        } catch (error) {
            // TODO: refacto cette partie du code
            // throw error
            if (error instanceof ValidationError) {
                validationErrorCatcher(error);
            }
        }
    }
    
    
    async getUser(email: string): Promise<UserEntity> {
        try {
            const user = await this._userRepository.getUserByEmail(email);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async resetData(): Promise<void> {
        try {
            await this._userRepository.resetData();
        } catch (error) {
            throw error;
        }
    }
}
