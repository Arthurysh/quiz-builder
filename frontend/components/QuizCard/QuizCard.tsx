import { useState } from 'react';
import { Eye, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { Quiz } from '../../types/Quiz';

interface QuizCardProps {
  quiz: Quiz;
  onDelete: (id: number) => Promise<void>;
}

export function QuizCard({ quiz, onDelete }: QuizCardProps) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await onDelete(quiz.id);
    } finally {
      setDeleting(false);
    }
  };

  const questionsCount = quiz.questions?.length || 0;
  const questionsText = questionsCount === 1 ? '1 question' : `${questionsCount} questions`;

  return (
    <>
      <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
        <div className="mb-4 flex items-start justify-between">
          <h2 className="mr-2 line-clamp-2 flex-1 text-xl font-semibold text-gray-800">
            {quiz.title}
          </h2>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex-shrink-0 text-red-500 transition-colors hover:text-red-700 disabled:opacity-50"
            title="Delete quiz"
            aria-label={`Delete quiz: ${quiz.title}`}
          >
            <Trash2 size={20} />
          </button>
        </div>

        <p className="mb-6 text-gray-600">{questionsText}</p>

        <Link
          href={`/quizzes/${quiz.id}`}
          className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
        >
          <Eye size={16} />
          View Details
        </Link>
      </div>
    </>
  );
}
