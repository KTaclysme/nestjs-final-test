import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { DatabaseModule } from '../infrastructure/database/database.module';
import { taskProviders } from './task.providers';

@Module({
    imports: [DatabaseModule],
    providers: [TaskService, ...taskProviders],
    controllers: [TaskController],
    exports: [TaskService],
})
export class TaskModule {}
