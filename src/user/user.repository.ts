import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';

export class UserRepository {
    constructor(private _sequelize: Sequelize) {}

    async getUserByEmail(email: string): Promise<User | null> {
        return await User.findOne({ where: { email } });
    }

    async addUser(email: string): Promise<User> {
        return await User.create({email})
    }

    async resetData(){
        return await User.destroy({where: {}, truncate: true})
    }
}
