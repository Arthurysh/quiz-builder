import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { QuizDetail } from '../../types/QuizDetail';
import { QuizStats } from '../../types/QuizStats';

interface QuizDetailHeaderProps {
  quiz: QuizDetail;
  stats: QuizStats;
}

export default function QuizDetailHeader({ quiz, stats }: QuizDetailHeaderProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">{quiz.title}</h1>

        <div className="flex flex-wrap gap-6 text-blue-100">
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span>{stats.totalQuestions} Questions</span>
          </div>
          {quiz.createdAt && (
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>Created {formatDate(quiz.createdAt)}</span>
            </div>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold">{stats.totalQuestions}</div>
            <div className="text-sm text-blue-100">Total Questions</div>
          </div>

          <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold">{stats.booleanQuestions}</div>
            <div className="text-sm text-blue-100">True/False</div>
          </div>

          <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold">{stats.inputQuestions}</div>
            <div className="text-sm text-blue-100">Text Input</div>
          </div>

          <div className="rounded-lg bg-white/10 p-4 text-center backdrop-blur-sm">
            <div className="text-2xl font-bold">{stats.multipleChoiceQuestions}</div>
            <div className="text-sm text-blue-100">Multiple Choice</div>
          </div>
        </div>
      </div>
    </div>
  );
}
