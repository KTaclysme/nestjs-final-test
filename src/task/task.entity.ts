import { AllowNull, Column, Table } from 'sequelize-typescript';
import { Task } from './task.model';

@Table
export class TaskEntity extends Task {
    name: string;
    priority: number;
}
