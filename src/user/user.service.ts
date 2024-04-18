import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
    ) {}

    async addUser(email: string): Promise<User> {
        try {
            const addUser = new User;
            addUser.email = email;
            return await addUser.save();
        } catch (error) {            
            throw new HttpException('Cet utilisateur existe déjà ou n\'est pas valide', HttpStatus.BAD_REQUEST);
        }
    }

    async getUser(email: string): Promise<User|null> {
        try {
            return await this.userModel.findOne({ where: { email } });
        } catch (error) {
            throw error; 
        }
    }

    async resetData(): Promise<void> {
        try {
            await this.userModel.destroy({ where: {}, truncate: true });
        } catch (error) {
            throw error; 
        }
    }    
}
