import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
    imports: [TaskModule, UserModule, DatabaseModule],
    providers: [DatabaseModule],
    exports: [DatabaseModule, UserModule, TaskModule],
})
export class AppModule {}
