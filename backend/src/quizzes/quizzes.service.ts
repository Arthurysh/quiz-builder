import { Injectable, NotFoundException } from '@nestjs/common';
import { QuizzesRepository } from './quizzes.repository';
import { Quiz } from '../../models/quizzes/quiz.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuestionService } from '../question/question.service';
import { Sequelize } from 'sequelize';
import { InjectConnection } from '@nestjs/sequelize';

@Injectable()
export class QuizzesService {
  constructor(
    private readonly quizzesRepository: QuizzesRepository,
    private readonly questionService: QuestionService,
    @InjectConnection()
    private readonly sequelize: Sequelize,
  ) {}
  async getAllQuizzes(): Promise<Quiz[]> {
    return await this.quizzesRepository.findAll();
  }

  async getQuizById(quizId: number): Promise<Quiz> {
    const quizData = await this.quizzesRepository.findOneById(quizId);

    if (!quizData) throw new NotFoundException(`Quiz with ID ${quizId} not found`);

    return quizData;
  }

  async createQuiz(createQuizDto: CreateQuizDto): Promise<Quiz> {
    const transaction = await this.sequelize.transaction();

    try {
      const quiz = await this.quizzesRepository.createQuiz(createQuizDto.title, transaction);

      if (createQuizDto.questions && createQuizDto.questions.length > 0) {
        await this.questionService.createQuestionsForQuiz(
          createQuizDto.questions,
          quiz.id,
          transaction,
        );
      }

      await transaction.commit();
      return quiz;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async deleteQuiz(quizId: number): Promise<void> {
    await this.getQuizById(quizId);
    await this.quizzesRepository.deleteById(quizId);
  }
}
