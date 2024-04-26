import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
    imports: [UserModule, TaskModule, DatabaseModule],
})
export class AppModule {}
