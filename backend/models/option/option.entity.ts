import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Question } from '../question/question.entity';
import { CreateOptionDto } from 'src/option/dto/create-option.dto';

@Table({ tableName: 'options', timestamps: false })
export class Option extends Model<Option, CreateOptionDto> {
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
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    isCorrect: boolean;

    @ForeignKey(() => Question)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
    })
    questionId: number;

    @BelongsTo(() => Question)
    question: Question;
}