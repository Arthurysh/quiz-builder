import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import QuizzesService from '../../services/QuizzesService';
import { QuizDetail } from '../../types/QuizDetail';
import { Question } from '../../types/Question';
import { QuizStats } from '../../types/QuizStats';
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import QuizDetailHeader from '../../components/QuizDetailHeader/QuizDetailHeader';
import QuizActionsBar from '../../components/QuizActionsBar/QuizActionsBar';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

interface QuizDetailPageProps {
  quizId?: string;
}

export default function QuizDetailPage({ quizId: propQuizId }: QuizDetailPageProps) {
  const router = useRouter();
  const [quiz, setQuiz] = useState<QuizDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const quizId = propQuizId || (router.query.id as string);

  const calculateStats = (questions: Question[]): QuizStats => {
    return {
      totalQuestions: questions?.length,
      booleanQuestions: questions?.filter(q => q.type === 'boolean').length,
      inputQuestions: questions?.filter(q => q.type === 'input').length,
      multipleChoiceQuestions: questions?.filter(q => q.type === 'checkbox').length,
    };
  };

  const fetchQuiz = useCallback(async () => {
    if (!quizId) return;

    setLoading(true);
    setError(null);

    try {
      const response = await QuizzesService.getQuizById(quizId);
      setQuiz(response.data);
    } catch (err) {
      console.error('Error fetching quiz:', err);
      setError('Failed to load quiz. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [quizId]);

  useEffect(() => {
    fetchQuiz().then(e => console.error(e));
  }, [fetchQuiz]);

  const handleRetry = () => {
    fetchQuiz().then(e => console.error(e));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <LoadingSpinner size="lg" message="Loading quiz details..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <ErrorMessage title="Failed to Load Quiz" message={error} onRetry={handleRetry} />
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <ErrorMessage
            title="Quiz Not Found"
            message="The quiz you're looking for doesn't exist or has been removed."
          />
        </div>
      </div>
    );
  }

  const stats = calculateStats(quiz.questions);

  return (
    <div className="min-h-screen bg-gray-50">
      <QuizActionsBar />
      <div className="mx-auto max-w-6xl px-4 pb-8">
        <QuizDetailHeader quiz={quiz} stats={stats} />
        <QuestionsList questions={quiz.questions} />
      </div>
    </div>
  );
}
