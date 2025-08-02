import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import QuizzesService from '../../services/QuizzesService';
import { Quiz } from '../../types/Quiz';
import { EmptyState } from '../EmptyState/EmptyState';
import { QuizCard } from '../QuizCard/QuizCard';

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await QuizzesService.getQuizzes();
      setQuizzes(response.data);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      setError('Failed to load quizzes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteQuiz = async (id: number) => {
    try {
      await QuizzesService.deleteQuiz(id);
      setQuizzes(prevQuizzes => prevQuizzes.filter(quiz => quiz.id !== id));
    } catch (error) {
      console.error('Error deleting quiz:', error);
      setError('Failed to delete quiz. Please try again.');
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading quizzes..." />;
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="mb-4 text-xl text-red-600">{error}</p>
          <button
            onClick={fetchQuizzes}
            className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (quizzes.length === 0) {
    return (
      <EmptyState
        title="No quizzes found"
        description="Get started by creating your first quiz!"
        actionLabel="Create Quiz"
        actionHref="/create"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {quizzes.map(quiz => (
        <QuizCard key={quiz.id} quiz={quiz} onDelete={handleDeleteQuiz} />
      ))}
    </div>
  );
}
