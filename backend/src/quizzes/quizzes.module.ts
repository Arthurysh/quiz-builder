import { Module } from '@nestjs/common';
import { QuizzesController } from './quizzes.controller';
import { QuizzesRepository } from './quizzes.repository';
import { QuizzesService } from './quizzes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Quiz } from 'models/quizzes/quiz.entity';
import { Question } from '../../models/question/question.entity';
import { Option } from '../../models/option/option.entity';
import { OptionModule } from '../option/option.module';
import { QuestionModule } from '../question/question.module';

@Module({
  imports: [SequelizeModule.forFeature([Quiz, Question, Option]), OptionModule, QuestionModule],
  controllers: [QuizzesController],
  providers: [QuizzesRepository, QuizzesService],
})
export class QuizzesModule {}
