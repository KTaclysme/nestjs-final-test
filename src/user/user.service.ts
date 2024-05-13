import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { validationErrorCatcher } from '../errors/validationErrorCatcher';
import { ValidationError, ValidationErrorItem } from 'sequelize';
import { apiErrorCatcher } from '../errors/apiErrorCatcher';
import { ApiErrorEnum } from '../errors/enums/ErrorEnum';

@Injectable()
export class UserService {
    constructor(private readonly _userRepository: UserRepository) {}

    async addUser(email: string): Promise<UserEntity> {
        try {
            const newUser = await this._userRepository.addUser(email);
            return newUser;
        } catch (error) {
            if (error instanceof ValidationError) {
                const validationErrorItems: ValidationErrorItem[] =
                    error.errors;
                validationErrorCatcher(validationErrorItems);
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
    async getUserId(userId: number): Promise<UserEntity> {
        // console.log({ userId: userId }, '1');
        const user = await this._userRepository.getUserByUserId(userId);
        // console.log({ user: user }, '2');
        // console.log({ userId: userId }, '3');
        if (!user) {
            // console.log({ user: user }, '4');
            apiErrorCatcher(ApiErrorEnum.USER_NULL);
        }
        // console.log({ userId: userId }, '5');
        // console.log({ user: user }, '6');
        return user;
    }

    async resetData(): Promise<void> {
        try {
            await this._userRepository.resetData();
        } catch (error) {
            throw error;
        }
    }
}
