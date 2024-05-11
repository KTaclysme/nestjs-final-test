import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskToCreateDto } from './TaskDto/TaskToCreate.dto';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    addTask(@Body() taskToCreateDto: TaskToCreateDto) {
        return this.taskService.addTask(
            taskToCreateDto.name,
            taskToCreateDto.userId,
            taskToCreateDto.priority,
        );
    }

    @Get(':name')
    getTaskByName(@Param('name') name: string) {
        return this.taskService.getTaskByName(name);
    }

    @Get('user/:userId')
    getUserTasksById(@Param('userId', ParseIntPipe) userId: number) {
        // pas sur du parseintpipe
        return this.taskService.getUserTasks(userId);
    }

    @Delete()
    resetData() {
        return this.taskService.resetData();
    }
}
