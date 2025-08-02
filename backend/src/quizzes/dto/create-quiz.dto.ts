import { Type } from 'class-transformer';
import { CreateQuestionDto } from '../../question/dto/create-question.dto';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @ValidateNested({ each: true })
  @Type(() => CreateQuestionDto)
  questions?: CreateQuestionDto[];
}
