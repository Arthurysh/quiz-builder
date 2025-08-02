import { Injectable } from '@nestjs/common';
import { QuestionRepository } from './question.repository';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from '../../models/question/question.entity';
import { OptionService } from 'src/option/option.service';
import { Transaction } from 'sequelize';
import { QuestionType } from '../../models/question/question-type.enum';

@Injectable()
export class QuestionService {
  constructor(
    private readonly questionRepository: QuestionRepository,
    private readonly optionService: OptionService,
  ) {}

  async createQuestionsForQuiz(
    questionsDto: CreateQuestionDto[],
    quizId: number,
    transaction?: Transaction,
  ): Promise<Question[]> {
    const createdQuestions: Question[] = [];

    for (const questionDto of questionsDto) {
      let correctAnswer: string | null = null;

      if (questionDto.type === QuestionType.BOOLEAN && questionDto.correctAnswer !== undefined) {
        correctAnswer = String(questionDto.correctAnswer);
      } else if (
        questionDto.type === QuestionType.INPUT &&
        questionDto.correctAnswer !== undefined
      ) {
        correctAnswer = String(questionDto.correctAnswer);
      }

      const question = await this.questionRepository.createQuestion(
        {
          text: questionDto.text,
          type: questionDto.type,
          correctAnswer: correctAnswer,
          quizId: quizId,
        },
        transaction,
      );

      if (
        questionDto.type === QuestionType.CHECKBOX &&
        questionDto.options &&
        questionDto.options.length > 0
      ) {
        await this.optionService.createOptions(questionDto.options, question.id, transaction);
      }

      createdQuestions.push(question);
    }

    return createdQuestions;
  }
}
