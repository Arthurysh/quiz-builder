import React, { useState } from 'react';
import QuizzesService from '../../services/QuizzesService';
import QuestionsSection from '../../components/QuestionsSection/QuestionsSection';
import QuizActions from '../../components/QuizActions/QuizActions';
import QuizHeader from '../../components/QuizHeader/QuizHeader';
import { Question } from '../../types/Question';

export default function QuizCreationPage() {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: 'boolean',
      text: '',
      correctAnswer: true,
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(questions.map(q => (q.id === id ? { ...q, ...updates } : q)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quizTitle.trim() || questions.length === 0) {
      alert('Please provide a quiz title and at least one question');
      return;
    }

    const hasInvalidQuestions = questions.some(question => {
      if (!question.text.trim()) return true;

      if (question.type === 'checkbox') {
        const options = question.options || [];
        if (options.length === 0) return true;
        if (!options.some(opt => opt.isCorrect)) return true;
        if (options.some(opt => !opt.text.trim())) return true;
      }

      if (question.type === 'input' && !question.correctAnswer) return true;

      return false;
    });

    if (hasInvalidQuestions) {
      alert('Please complete all questions and ensure they have valid answers');
      return;
    }

    setIsSubmitting(true);
    try {
      await QuizzesService.createQuiz(quizTitle, questions);
      alert('Quiz created successfully!');
      setQuizTitle('');
      setQuestions([]);
    } catch (error) {
      alert('Error creating quiz. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const canSubmit = quizTitle.trim() && questions.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <form onSubmit={handleSubmit}>
            <QuizHeader title={quizTitle} onTitleChange={setQuizTitle} />

            <QuestionsSection
              questions={questions}
              onAddQuestion={addQuestion}
              onUpdateQuestion={updateQuestion}
              onRemoveQuestion={removeQuestion}
            />

            <QuizActions isSubmitting={isSubmitting} canSubmit={canSubmit} onSubmit={() => {}} />
          </form>
        </div>
      </div>
    </div>
  );
}
