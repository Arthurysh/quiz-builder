import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Question } from '../../models/question/question.entity';
import { Transaction } from 'sequelize';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionRepository {
  constructor(
    @InjectModel(Question)
    private readonly questionModel: typeof Question,
  ) {}

  async createQuestion(data: CreateQuestionDto, transaction?: Transaction): Promise<Question> {
    return await this.questionModel.create(
      {
        text: data.text,
        type: data.type,
        correctAnswer: data.correctAnswer,
        quizId: data.quizId,
      },
      { transaction },
    );
  }
}
