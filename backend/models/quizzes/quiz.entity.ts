import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import {Question} from "../question/question.entity";
import {CreateQuizDto} from "../../src/quizzes/dto/create-quiz.dto";

@Table({ tableName: 'quizzes', timestamps: true })
export class Quiz extends Model<Quiz, CreateQuizDto> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @HasMany(() => Question, {
        onDelete: 'CASCADE',
        hooks: true
    })
    questions: Question[];
}