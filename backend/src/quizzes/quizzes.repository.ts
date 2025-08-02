import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Quiz } from '../../models/quizzes/quiz.entity';
import { Question } from '../../models/question/question.entity';
import { Option } from '../../models/option/option.entity';
import { Transaction } from 'sequelize';

@Injectable()
export class QuizzesRepository {
  constructor(
    @InjectModel(Quiz)
    private readonly quizModel: typeof Quiz,
  ) {}

  async findAll(): Promise<Quiz[]> {
    return this.quizModel.findAll({
      include: [
        {
          model: Question,
          include: [Option],
        },
      ],
    });
  }

  async findOneById(id: number): Promise<Quiz | null> {
    return this.quizModel.findByPk(id, {
      include: [
        {
          model: Question,
          include: [Option],
        },
      ],
    });
  }

  async deleteById(id: number): Promise<void> {
    await this.quizModel.destroy({ where: { id } });
  }

  async createQuiz(title: string, transaction?: Transaction): Promise<Quiz> {
    return await this.quizModel.create({ title }, { transaction });
  }
}
