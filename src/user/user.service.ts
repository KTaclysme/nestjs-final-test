import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: typeof User,
    ) {}

    async addUser(email: string): Promise<User> {
        try {
            const newUser = await this.userRepository.create({ email });
            return newUser;
        } catch (error) {
            throw new HttpException(
                "Cet utilisateur existe déjà ou n'est pas valide",
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async getUser(email: string): Promise<User | null> {
        try {
            const user = await this.userRepository.findOne({ where: { email } });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async resetData(): Promise<void> {
        try {
            await this.userRepository.destroy({ where: {}, truncate: true });
        } catch (error) {
            throw error;
        }
    }
}
