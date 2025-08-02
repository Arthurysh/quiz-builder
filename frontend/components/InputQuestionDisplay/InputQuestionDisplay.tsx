import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Question } from '../../types/Question';

interface InputQuestionDisplayProps {
  question: Question;
}

export default function InputQuestionDisplay({ question }: InputQuestionDisplayProps) {
  const correctAnswer = question.correctAnswer as string;

  return (
    <div>
      <h4 className="mb-3 text-sm font-medium text-gray-600">Expected Answer:</h4>
      <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
        <div className="flex items-start gap-3">
          <MessageSquare size={20} className="mt-0.5 flex-shrink-0 text-green-600" />
          <div>
            <p className="font-medium text-green-800">{correctAnswer || 'No answer provided'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
