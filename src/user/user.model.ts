import {
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    })
    email: string;
}
