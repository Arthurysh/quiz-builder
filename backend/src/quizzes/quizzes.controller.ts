import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Quiz } from '../../models/quizzes/quiz.entity';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}
  @Get()
  async getAllQuizzes(): Promise<Quiz[]> {
    return await this.quizzesService.getAllQuizzes();
  }

  @Get('/:id')
  async getQuiz(@Param() params: { id: number }): Promise<Quiz | null> {
    return await this.quizzesService.getQuizById(params.id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }))
  async createNewQuiz(@Body() createQuizDto: CreateQuizDto): Promise<Quiz> {
    return await this.quizzesService.createQuiz(createQuizDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteQuiz(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.quizzesService.deleteQuiz(id);
  }
}
