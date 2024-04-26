import { Inject, Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TaskService {
    constructor(
        @Inject('TASK_REPOSITORY')
        private taskRepository: typeof Task,
    ) {}

    async addTask(
        name: string,
        userId: string,
        priority: number,
    ): Promise<Task> {
        try {
            const addTask = new Task();
            addTask.name = name;
            addTask.userId = userId;
            addTask.priority = priority;
            return await addTask.save();
        } catch (error) {
            throw error;
        }
    }

    async getTaskByName(name: string): Promise<Task | null> {
        try {
            return await this.taskRepository.findOne({ where: { name } });
        } catch (error) {
            throw error;
        }
    }

    async getUserTasks(userId: string): Promise<Task | null> {
        try {
            return await this.taskRepository.findOne({ where: { userId } });
        } catch (error) {
            throw error;
        }
    }

    async resetData(): Promise<void> {
        try {
            await this.taskRepository.destroy({ where: {}, truncate: true });
        } catch (error) {
            throw error;
        }
    }
}
