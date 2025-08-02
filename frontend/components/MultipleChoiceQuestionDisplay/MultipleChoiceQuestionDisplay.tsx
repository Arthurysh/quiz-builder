import React from 'react';
import { Check, X } from 'lucide-react';
import { Question } from '../../types/Question';

interface MultipleChoiceQuestionDisplayProps {
  question: Question;
}

export default function MultipleChoiceQuestionDisplay({
  question,
}: MultipleChoiceQuestionDisplayProps) {
  const options = question.options || [];

  return (
    <div>
      <h4 className="mb-3 text-sm font-medium text-gray-600">Answer Options:</h4>

      <div className="space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 rounded-lg border-2 p-3 ${
              option.isCorrect ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                option.isCorrect ? 'bg-green-200 text-green-700' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {option.isCorrect ? <Check size={14} /> : <X size={14} />}
            </div>

            <span
              className={`font-medium ${option.isCorrect ? 'text-green-800' : 'text-gray-700'}`}
            >
              {option.text || `Option ${index + 1}`}
            </span>

            {option.isCorrect && (
              <span className="ml-auto rounded-full bg-green-200 px-2 py-1 text-xs font-medium text-green-800">
                Correct
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
