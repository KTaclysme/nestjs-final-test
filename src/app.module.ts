import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { Task } from './task/task.model';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'postgres',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'postgres',
            models: [User, Task],
        }),
    ],
})
export class AppModule {}
