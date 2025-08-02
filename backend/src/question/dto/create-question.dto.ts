import { IsString, IsEnum, IsNotEmpty, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionType } from '../../../models/question/question-type.enum';
import { CreateOptionDto } from '../../option/dto/create-option.dto';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsEnum(QuestionType)
  type: QuestionType;

  quizId?: number;

  @IsOptional()
  correctAnswer?: boolean | string | null;

  @ValidateNested({ each: true })
  @Type(() => CreateOptionDto)
  options?: CreateOptionDto[];
}
