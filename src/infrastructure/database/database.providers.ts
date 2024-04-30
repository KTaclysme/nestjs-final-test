import { Sequelize } from 'sequelize-typescript';
import { Task } from '../../task/task.model';
import { User } from '../../user/user.model';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 24000,
                username: 'postgres',
                password: 'postgres',
                database: 'postgres',
            });
            sequelize.addModels([User, Task]);
            await sequelize.sync();
            console.log(
                `Base de donnée créée et opérationnelle sur le port ${sequelize.options.port}`,
            );
            return sequelize;
        },
    },
];
