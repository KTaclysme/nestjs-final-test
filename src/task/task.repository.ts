import { Task } from './task.model';

export class TaskRepository {
    constructor() {}
    async addTask(name: string, userId: string, priority: number) {
        return await Task.create({ name, userId, priority });
    }

    async getTaskByName(name: string): Promise<Task | null> {
        return await Task.findOne({ where: { name } });
    }

    async getUserTasksById(userId: string): Promise<Task> {
        return await Task.findOne({ where: { userId } });
    }

    async resetData() {
        return await Task.destroy({ where: {}, truncate: true });
    }
}
