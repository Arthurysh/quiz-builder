import { Question } from './Question';

export interface QuizDetail {
  id: string;
  title: string;
  questions: Question[];
  createdAt?: string;
  updatedAt?: string;
}
