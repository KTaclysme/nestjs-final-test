import { Inject, Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { TaskRepository } from './task.repository';
import { TaskEntity } from './task.entity';
@Injectable()
export class TaskService {
    constructor(
        private readonly _taskRepository: TaskRepository
    ) {}

    async addTask(name: string, userId: string, priority: number): Promise<TaskEntity> {
        try {
            const newTask = await this._taskRepository.addTask(name, userId, priority);
            return newTask;
        } catch (error) {
            throw error;
        }
    }

    async getTaskByName(name: string): Promise<TaskEntity> {
        try {
            return await this._taskRepository.getTaskByName(name);
        } catch (error) {
            throw error;
        }
    }

    async getUserTasks(userId: string): Promise<TaskEntity> {
        try {
            return await this._taskRepository.getUserTasksById(userId);
        } catch (error) {
            throw error;
        }
    }

    async resetData(): Promise<void> {
        try {
            await this._taskRepository.resetData();
        } catch (error) {
            throw error;
        }
    }
}
