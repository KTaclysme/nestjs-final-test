import { Sequelize } from 'sequelize-typescript';
import { Task } from './task.model';

export class TaskRepository {
    constructor(private _sequelize: Sequelize) {}
    async addTask(name: string, userId: string, priority: number) {
        return await Task.create({ name, userId, priority });
    }

    async getTaskByName(name: string): Promise<Task | null> {
        return await Task.findOne({ where: { name } });
    }

    async getUserTasksById(userId: string): Promise<Task> {
        return await Task.create({ where: { userId } });
    }

    async resetData() {
        return await Task.destroy({ where: {}, truncate: true });
    }
}
