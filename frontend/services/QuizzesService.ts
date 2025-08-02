import $api from '../http';
import { Question } from '../types/Question';

export default class QuizzesService {
  static headers = {
    'Content-Type': 'application/json',
  };

  static async getQuizzes() {
    const options = { headers: this.headers };

    return $api.get(`/quizzes`, options);
  }

  static async getQuizById(id: string) {
    const options = { headers: this.headers };

    return $api.get(`/quizzes/${id}`, options);
  }

  static async createQuiz(title: string, questions: Question[]) {
    const options = { headers: this.headers };

    return $api.post(`/quizzes`, { title: title, questions: questions }, options);
  }

  static async deleteQuiz(id: number) {
    const options = { headers: this.headers };

    return $api.delete(`/quizzes/${id}`, options);
  }
}
