import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
// import { TaskModule } from './task/task.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
    imports: [UserModule, DatabaseModule],
    providers: [DatabaseModule],
    exports: [DatabaseModule, UserModule],
})
export class AppModule {}
