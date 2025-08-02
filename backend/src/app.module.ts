import { Module } from '@nestjs/common';
import { QuizzesModule } from './quizzes/quizzes.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    QuizzesModule,
  ],
})
export class AppModule {}
