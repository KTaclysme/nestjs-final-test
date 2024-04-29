import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(private readonly _userRepository: UserRepository) {}

    async addUser(email: string): Promise<UserEntity> {
        try {
            const newUser = await this._userRepository.addUser(email);
            return newUser;
        } catch (error) {
            throw new HttpException(
                "Cet utilisateur existe déjà ou n'est pas valide",
                HttpStatus.BAD_REQUEST,
            );
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
