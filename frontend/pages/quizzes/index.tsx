import Link from 'next/link';
import QuizList from '../../components/QuizList/QuizList';

export default function QuizListPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">All Quizzes</h1>
          <Link
            href="/create"
            className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Create New Quiz
          </Link>
        </div>
        <QuizList />
      </div>
    </div>
  );
}
