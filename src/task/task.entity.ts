import { AllowNull, Column, Table } from 'sequelize-typescript';
import { Task } from './task.model';

@Table
export class TaskEntity extends Task {
    @AllowNull(false)
    @Column
    userId: string;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    priority: number;
}
