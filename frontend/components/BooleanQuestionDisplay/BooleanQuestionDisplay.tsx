import React from 'react';
import { Check } from 'lucide-react';
import { Question } from '../../types/Question';

interface BooleanQuestionDisplayProps {
  question: Question;
}

export default function BooleanQuestionDisplay({ question }: BooleanQuestionDisplayProps) {
  const correctAnswerString = question.correctAnswer;
  const correctAnswer = correctAnswerString === 'true';

  return (
    <div>
      <h4 className="mb-3 text-sm font-medium text-gray-600">Correct Answer:</h4>
      <div className="flex gap-4">
        <div
          className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200 ${
            correctAnswer === true
              ? 'border-2 border-green-200 bg-green-50 text-green-700 shadow-sm'
              : 'border border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100'
          }`}
        >
          <div className="flex h-[18px] w-[18px] items-center justify-center">
            {correctAnswer === true ? (
              <Check size={18} className="text-green-600" />
            ) : (
              <div className="h-[18px] w-[18px] rounded-full border border-gray-300" />
            )}
          </div>
          <span className="font-medium">True</span>
        </div>

        <div
          className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200 ${
            correctAnswer === false
              ? 'border-2 border-green-200 bg-green-50 text-green-700 shadow-sm'
              : 'border border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100'
          }`}
        >
          <div className="flex h-[18px] w-[18px] items-center justify-center">
            {correctAnswer === false ? (
              <Check size={18} className="text-green-600" />
            ) : (
              <div className="h-[18px] w-[18px] rounded-full border border-gray-300" />
            )}
          </div>
          <span className="font-medium">False</span>
        </div>
      </div>

      {/* Дополнительная информация */}
      <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
        <p className="text-sm text-blue-700">
          <span className="font-medium">Answer:</span> {correctAnswer ? 'True' : 'False'}
        </p>
      </div>
    </div>
  );
}
