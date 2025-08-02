import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Question } from '../../models/question/question.entity';
import { QuestionRepository } from './question.repository';
import { QuestionService } from './question.service';
import { OptionModule } from '../option/option.module';

@Module({
  imports: [SequelizeModule.forFeature([Question]), OptionModule],
  providers: [QuestionRepository, QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
