import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
} from 'sequelize-typescript';
import {QuestionType} from "./question-type.enum";
import {Quiz} from "../quizzes/quiz.entity";
import {Option} from "../option/option.entity";
import {CreateQuestionDto} from "../../src/question/dto/create-question.dto";


@Table({ tableName: 'questions', timestamps: false })
export class Question extends Model<Question, CreateQuestionDto> {
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
    text: string;

    @Column({
        type: DataType.ENUM(...Object.values(QuestionType)),
        allowNull: false,
    })
    type: QuestionType;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    correctAnswer: string;

    @ForeignKey(() => Quiz)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
    })
    quizId: number;

    @BelongsTo(() => Quiz)
    quiz: Quiz;

    @HasMany(() => Option, {
        onDelete: 'CASCADE',
        hooks: true
    })
    options: Option[];
}