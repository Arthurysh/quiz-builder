import React from 'react';
import { Question } from '../../types/Question';
import QuestionDisplay from '../QuestionDisplay/QuestionDisplay';

interface QuestionsListProps {
  questions: Question[];
}

export default function QuestionsList({ questions }: QuestionsListProps) {
  if (questions?.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="mb-4 text-gray-400">
          <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-medium text-gray-900">No Questions Found</h3>
        <p className="text-gray-500">This quiz doesn&quot;t have any questions yet.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Questions</h2>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500">
          {questions?.length} question{questions?.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="space-y-6">
        {questions?.map((question, index) => (
          <QuestionDisplay key={question.id} question={question} index={index} />
        ))}
      </div>
    </div>
  );
}
