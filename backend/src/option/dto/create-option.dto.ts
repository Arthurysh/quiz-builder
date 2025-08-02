import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateOptionDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsBoolean()
  isCorrect: boolean;

  questionId?: number;
}
