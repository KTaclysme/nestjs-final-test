import { Sequelize } from 'sequelize-typescript';
import { Task } from 'src/task/task.model';
// import { User } from 'src/user/user.model';
import { UserEntity } from 'src/user/user.entity';

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
            sequelize.addModels([UserEntity, Task]);
            await sequelize.sync();
            console.log(`Base de donnée créée et opérationnelle sur le port ${sequelize.options.port}`);
            return sequelize;
        },
    },
];
