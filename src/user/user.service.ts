import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';
import { validationErrorCatcher } from '../errors/validationErrorCatcher';
import { ValidationError, ValidationErrorItem } from 'sequelize';

@Injectable()
export class UserService {
    constructor(private readonly _userRepository: UserRepository) {}

    async addUser(email: string): Promise<UserEntity> {
        try {
            console.log(
                email,
                '444444444444444444444444444444444444444444444444444444',
            );
            const newUser = await this._userRepository.addUser(email);
            return newUser;
        } catch (error) {
            // TODO: refacto cette partie du code
            // throw error
            // console.log(email, error.errors, '000000000000000000000000000000000000000000000000')
            // throw new HttpException(
            //     "Cet utilisateur existe déjà ou n'est pas valide",
            //     HttpStatus.BAD_REQUEST,
            // );
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

    async resetData(): Promise<void> {
        try {
            await this._userRepository.resetData();
        } catch (error) {
            throw error;
        }
    }
}
