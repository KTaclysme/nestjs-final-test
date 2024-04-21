import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/user.model';
import { Task } from './task/task.model';
import { UserService } from './user/user.service';
import { TaskService } from './task/task.service';

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
    providers: [UserService, TaskService],
})
export class AppModule {}
