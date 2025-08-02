export interface Question {
  id: string;
  type: 'boolean' | 'input' | 'checkbox';
  text: string;
  options?: Option[];
  correctAnswer?: string | string[] | boolean;
}
