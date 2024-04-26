import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from '../../task/task.model';
import { User } from '../../user/user.model';

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
        SequelizeModule.forFeature([User, Task]),
    ],
})
export class DatabaseModule {}
